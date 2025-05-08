import Link from 'next/link';
import { notFound } from 'next/navigation';
import { existsSync } from 'fs';
import path from 'path';
import fs from 'fs';
import { TopicContent, Section, Exercise, Curriculum } from '@/types/curriculum';

// We'll use dynamic imports to load the content
async function getTopicContent(group: string, topic: string): Promise<TopicContent | null> {
  try {
    // Check if the content file exists
    const contentPath = path.join(process.cwd(), 'app/topics', group, topic, 'content.ts');
    
    if (!existsSync(contentPath)) {
      return null;
    }
    
    // Dynamically import the content
    const content = await import(`../../../topics/${group}/${topic}/content`);
    
    return content.default;
  } catch (error) {
    console.error('Failed to load topic content:', error);
    return null;
  }
}

// Function to load curriculum data
async function getCurriculum(): Promise<Curriculum> {
  try {
    const filePath = path.join(process.cwd(), 'scripts', 'sample_curriculum.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as Curriculum;
  } catch (error) {
    console.error('Error loading curriculum data:', error);
    return [];
  }
}

// Required for static site generation with `output: export`
export async function generateStaticParams() {
  const curriculum = await getCurriculum();
  
  const params = [];
  
  for (const group of curriculum) {
    for (const topic of group.topics) {
      params.push({
        group: group.id,
        topic: topic.id
      });
    }
  }
  
  return params;
}

export default async function TopicPage({ params }: { params: { group: string; topic: string } }) {
  const topicContent = await getTopicContent(params.group, params.topic);
  
  // If content doesn't exist, show 404
  if (!topicContent) {
    notFound();
  }
  
  // After the null check, topicContent is definitely not null
  const { title, introduction, sections, exercises } = topicContent;
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          href="/" 
          className="text-primary hover:underline flex items-center gap-1"
        >
          <span>←</span> Back to Curriculum
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      
      <div className="bg-card border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg">{introduction}</p>
      </div>
      
      <div className="space-y-8 mb-12">
        {sections.map((section: Section, index: number) => (
          <div key={index} className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <div className="text-lg">{section.content}</div>
          </div>
        ))}
      </div>
      
      {exercises && exercises.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Exercises</h2>
          <div className="space-y-6">
            {exercises.map((exercise: Exercise) => (
              <div key={exercise.id} className="bg-muted border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">{exercise.question}</h3>
                <div className="space-y-2">
                  {exercise.options.map((option: string, idx: number) => (
                    <div 
                      key={idx} 
                      className={`p-3 border rounded cursor-pointer ${
                        idx === exercise.correctAnswerIndex 
                          ? 'bg-green-100 dark:bg-green-900 border-green-500' 
                          : 'bg-card hover:bg-secondary'
                      }`}
                    >
                      {option} {idx === exercise.correctAnswerIndex && '✓'}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 
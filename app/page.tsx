import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { Curriculum, TopicGroup, Topic } from '@/types/curriculum';

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

export default async function Home() {
  const topicGroups = await getCurriculum();

  return (
    <div className="space-y-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Curriculum Explorer</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Browse through our comprehensive curriculum and explore topics through
          interactive tutorials and exercises.
        </p>
      </section>

      {topicGroups.map((group: TopicGroup) => (
        <section key={group.id} className="mb-12">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-6">{group.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {group.topics.map((topic: Topic) => (
              <Link 
                href={`/topics/${group.id}/${topic.id}`} 
                key={topic.id} 
                className="block"
              >
                <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-card text-card-foreground h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">{topic.title}</h3>
                    <p className="text-muted-foreground">{topic.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
} 
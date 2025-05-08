#!/usr/bin/env python3
import json
import os
import sys
from pathlib import Path
import argparse

# Define templates for the tutorial content
TUTORIAL_TEMPLATE = """export type Exercise = {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
};

export type TopicContent = {
  title: string;
  introduction: string;
  sections: {
    title: string;
    content: string;
  }[];
  exercises: Exercise[];
};

const topicContent: TopicContent = {CONTENT};

export default topicContent;
"""

def generate_introduction(topic, audience, level):
    """Generate introduction based on topic and audience."""
    return f"Welcome to our tutorial on {topic}! This material is designed for {audience} students at the {level} level. In this tutorial, you'll learn the fundamental concepts and practical applications of {topic}."

def generate_content(topic_data):
    """Generate the tutorial content from topic data."""
    # Extract information from topic data
    topic_title = topic_data.get("title", "Unknown Topic")
    topic_description = topic_data.get("description", "")
    subtopics = topic_data.get("subtopics", [])
    audience = topic_data.get("audience", "all")
    level = topic_data.get("level", "beginner")
    
    # Generate exercises if available
    exercises = []
    if "questions" in topic_data:
        for i, q in enumerate(topic_data["questions"]):
            question = q.get("question", "")
            options = q.get("options", ["Option A", "Option B", "Option C", "Option D"])
            correct_answer = q.get("correctAnswer", 0)
            
            exercises.append({
                "id": str(i + 1),
                "question": question,
                "options": options,
                "correctAnswerIndex": correct_answer
            })
    
    # Generate sections based on subtopics
    sections = []
    if subtopics:
        for subtopic in subtopics:
            title = subtopic.get("title", "")
            description = subtopic.get("description", "")
            
            sections.append({
                "title": title,
                "content": description
            })
    else:
        # If no subtopics, create a default section
        sections.append({
            "title": "Overview",
            "content": topic_description
        })
    
    # Create the topic content structure
    content = {
        "title": topic_title,
        "introduction": generate_introduction(topic_title, audience, level),
        "sections": sections,
        "exercises": exercises
    }
    
    return content

def save_topic_file(content, output_path):
    """Save the topic content to a TypeScript file."""
    # Ensure directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # Format content as JSON and insert into template
    content_json = json.dumps(content, indent=2)
    file_content = TUTORIAL_TEMPLATE.replace("{CONTENT}", content_json)
    
    # Write to file
    with open(output_path, 'w') as f:
        f.write(file_content)
    
    print(f"Created tutorial file: {output_path}")

def process_curriculum(curriculum_file, output_dir):
    """Process curriculum JSON and generate tutorial files."""
    # Read curriculum data
    with open(curriculum_file, 'r') as f:
        curriculum = json.load(f)
    
    # Process each topic group
    for group in curriculum:
        group_id = group.get("id", "").lower().replace(" ", "-")
        topics = group.get("topics", [])
        
        for topic in topics:
            topic_id = topic.get("id", "").lower().replace(" ", "-")
            
            if not topic_id:
                continue
                
            # Generate content
            content = generate_content(topic)
            
            # Create path for output file
            output_path = os.path.join(output_dir, group_id, topic_id, "content.ts")
            
            # Save content to file
            save_topic_file(content, output_path)

def main():
    parser = argparse.ArgumentParser(description='Generate tutorial pages from curriculum data')
    parser.add_argument('curriculum_file', help='Path to the curriculum JSON file')
    parser.add_argument('--output-dir', default='app/topics', help='Output directory for generated files')
    
    args = parser.parse_args()
    
    process_curriculum(args.curriculum_file, args.output_dir)

if __name__ == "__main__":
    main() 
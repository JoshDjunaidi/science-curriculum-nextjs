export type Exercise = {
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

const topicContent: TopicContent = {
  "title": "Animals",
  "introduction": "Welcome to our tutorial on Animals! This material is designed for primary school students at the beginner level. In this tutorial, you'll learn the fundamental concepts and practical applications of Animals.",
  "sections": [
    {
      "title": "Animal Classification",
      "content": "Scientists classify animals into different groups based on their characteristics. The main groups include mammals, birds, reptiles, amphibians, fish, and invertebrates. Each group has specific features that distinguish them from other groups."
    },
    {
      "title": "Animal Habitats",
      "content": "Animals live in different environments called habitats. These include forests, deserts, oceans, polar regions, and grasslands. Each habitat has a unique set of conditions, and animals have adapted to survive in their specific habitat."
    }
  ],
  "exercises": [
    {
      "id": "1",
      "question": "Which of the following is NOT a main group for animal classification?",
      "options": [
        "Mammals",
        "Reptiles",
        "Plants",
        "Birds"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "2",
      "question": "What is a habitat?",
      "options": [
        "A type of animal",
        "The environment where an animal lives",
        "A special feature of animals",
        "A classification group for animals"
      ],
      "correctAnswerIndex": 1
    }
  ]
};

export default topicContent;

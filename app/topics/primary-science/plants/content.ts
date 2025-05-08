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
  "title": "Plants",
  "introduction": "Welcome to our tutorial on Plants! This material is designed for primary school students at the beginner level. In this tutorial, you'll learn the fundamental concepts and practical applications of Plants.",
  "sections": [
    {
      "title": "Plant Structure",
      "content": "Plants are living organisms that are members of the kingdom Plantae. They include familiar organisms such as trees, herbs, bushes, grasses, vines, ferns, mosses, and green algae. Plants have several main parts: roots, stems, leaves, flowers, fruits, and seeds. Each part has a specific function that helps the plant survive and reproduce."
    },
    {
      "title": "Plant Life Cycle",
      "content": "The plant life cycle begins with a seed. The seed will germinate and grow into a seedling. Then, the seedling will develop into a mature plant. The mature plant will produce flowers, which are then pollinated. After pollination, the plant will develop seeds inside a fruit. The fruit ripens and the seeds are dispersed. The cycle then repeats when the seed germinates."
    },
    {
      "title": "Photosynthesis",
      "content": "Photosynthesis is the process by which green plants create their food. The plant uses sunlight, water, nutrients from the soil, and carbon dioxide from the air to make glucose and oxygen. Photosynthesis takes place in the chloroplasts, specifically using the green pigment chlorophyll. This process is essential for all life on Earth as it produces oxygen and serves as the primary source of energy for all living organisms."
    }
  ],
  "exercises": [
    {
      "id": "1",
      "question": "What are the main parts of a plant?",
      "options": [
        "Roots, leaves, and fruits",
        "Roots, stems, leaves, flowers, fruits, and seeds",
        "Stems, leaves, and flowers",
        "Roots, stems, and leaves"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "2",
      "question": "What is photosynthesis?",
      "options": [
        "The process by which plants reproduce",
        "The process by which plants create their food using sunlight",
        "The process by which plants grow taller",
        "The process by which plants absorb water"
      ],
      "correctAnswerIndex": 1
    }
  ]
};

export default topicContent;

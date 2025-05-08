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
  "title": "Physics",
  "introduction": "Welcome to our tutorial on Physics! This material is designed for secondary school students at the intermediate level. In this tutorial, you'll learn the fundamental concepts and practical applications of Physics.",
  "sections": [
    {
      "title": "Forces and Motion",
      "content": "Forces are pushes or pulls that can cause objects to move, stop, or change direction. Newton's Three Laws of Motion describe how forces affect motion. The First Law states that an object will remain at rest or in uniform motion unless acted upon by an external force. The Second Law states that force equals mass times acceleration (F=ma). The Third Law states that for every action, there is an equal and opposite reaction."
    },
    {
      "title": "Energy",
      "content": "Energy is the ability to do work. It exists in many forms including potential energy, kinetic energy, thermal energy, electrical energy, chemical energy, and nuclear energy. The Law of Conservation of Energy states that energy cannot be created or destroyed, only transformed from one form to another."
    }
  ],
  "exercises": [
    {
      "id": "1",
      "question": "What is Newton's First Law of Motion?",
      "options": [
        "Force equals mass times acceleration",
        "For every action, there is an equal and opposite reaction",
        "An object will remain at rest or in uniform motion unless acted upon by an external force",
        "Energy cannot be created or destroyed"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "2",
      "question": "Which of the following is NOT a form of energy?",
      "options": [
        "Kinetic energy",
        "Thermal energy",
        "Force energy",
        "Chemical energy"
      ],
      "correctAnswerIndex": 2
    }
  ]
};

export default topicContent;

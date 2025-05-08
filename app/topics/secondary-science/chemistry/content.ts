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
  "title": "Chemistry",
  "introduction": "Welcome to our tutorial on Chemistry! This material is designed for secondary school students at the intermediate level. In this tutorial, you'll learn the fundamental concepts and practical applications of Chemistry.",
  "sections": [
    {
      "title": "Atoms and Elements",
      "content": "All matter is made up of atoms, which are the smallest units of an element that maintain the properties of that element. Elements are substances that cannot be broken down into simpler substances by chemical means. The periodic table organizes all known elements based on their properties and atomic structure."
    },
    {
      "title": "Chemical Reactions",
      "content": "Chemical reactions occur when substances combine or break apart to form new substances. During a chemical reaction, the atoms in the reactants rearrange to form products. Chemical reactions can be represented by chemical equations, which show the reactants on the left side and the products on the right side."
    }
  ],
  "exercises": [
    {
      "id": "1",
      "question": "What is an atom?",
      "options": [
        "The smallest unit of an element that maintains the properties of that element",
        "A substance that cannot be broken down into simpler substances",
        "A representation of a chemical reaction",
        "A combination of different elements"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "2",
      "question": "In a chemical equation, where are the reactants shown?",
      "options": [
        "On the right side",
        "On the left side",
        "In the middle",
        "Above the arrow"
      ],
      "correctAnswerIndex": 1
    }
  ]
};

export default topicContent;

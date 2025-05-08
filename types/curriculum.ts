export type Exercise = {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
};

export type Section = {
  title: string;
  content: string;
};

export type TopicContent = {
  title: string;
  introduction: string;
  sections: Section[];
  exercises: Exercise[];
};

export type Topic = {
  id: string;
  title: string;
  description: string;
  audience?: string;
  level?: string;
  subtopics?: {
    title: string;
    description: string;
  }[];
  questions?: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
};

export type TopicGroup = {
  id: string;
  title: string;
  topics: Topic[];
};

export type Curriculum = TopicGroup[]; 
import { Question } from "../types/quiz";

export const QUESTIONS: Question[] = [
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus" ,"Mercury" , "Earth"  ,"Mars"],
    correct: 1
  },
  {
    question: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
    options: ["Stack", "Queue", "Tree" ,"Graph"],
    correct: 1
  },
  {
    question: " Which of the following is primarily used for structuring web pages?",
    options: ["Python", "Java", "HTML", "C++"],
    correct: 2
  },
  {
    question: " Which chemical symbol stands for Gold?",
    options: ["Au", "Gd"," Ag" ," Pt" ],
    correct: 0
  },
  {
    question: " Which of these processes is not typically involved in refining petroleum?",
    options: ["Fractional distillation","Cracking"," PolymerizationD", "Filtration"],
    correct: 3
  }
  
];
const questions = [
  {
    question: "The capital of France is _______.",
    answer: "Paris"
  },
  {
    question: "React is developed by _______.",
    answer: "Facebook"
  },
  {
    question: "The chemical symbol for water is _______.",
    answer: "H2O"
  }
];

export default questions;


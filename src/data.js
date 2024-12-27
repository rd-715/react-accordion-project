const questions = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows you to build reusable UI components."
  },
  {
    id: 2,
    question: "How does React work?",
    answer: "React creates a virtual DOM and compares it with the real DOM. It then updates only the parts of the page that need to be changed, improving performance."
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe what the UI should look like."
  },
  {
    id: 4,
    question: "What are React Hooks?",
    answer: "React Hooks are functions that let you use state and other React features without writing a class. Examples include useState, useEffect, and useContext."
  },
  {
    id: 5,
    question: "What is the virtual DOM?",
    answer: "The virtual DOM is an in-memory representation of the real DOM elements. React uses it to optimize updates to the user interface by minimizing direct manipulation of the DOM."
  }
];

export default questions;

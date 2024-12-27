import Accordion from "./Accordion";
import questions from "./data";
import { useState } from "react";

export default function App() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="accordion-container">
      <h1 className="accordion-title">Frequently Asked Questions</h1>
      <div className="accordion">
        {questions.map((question) => (
          <Accordion
            key={question.id}
            id={question.id}
            question={question.question}
            answer={question.answer}
            isOpen={activeId === question.id}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </div>
  );
}

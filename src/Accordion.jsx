import { useState } from "react";

const Accordion = ({ id, question, answer, isOpen, toggleAccordion }) => {
  // const handleClick = () => {
  //   toggleAccordion(id);
  // };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header">
        <h2 className="accordion-question">{question}</h2>
        <button
          className="accordion-toggle"
          onClick={() => toggleAccordion(id)}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <p className="accordion-answer">{answer}</p>}
    </div>
  );
};

export default Accordion;

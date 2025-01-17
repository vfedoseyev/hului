import React, { useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAnswer}>
        <h3>{question}</h3>
        <span className={`faq-toggle ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div className={`faq-answer ${isOpen ? 'faq-answer--open' : ''}`}>
        {answer}
      </div>
    </div>
  );
};

export default FAQItem;

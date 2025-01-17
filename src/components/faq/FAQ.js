import React from 'react';
import FAQItem from './FAQItem';
import './FAQ.css';

const FAQ = () => {
  const faqData = [
    { question: 'Как заказать услугу?', answer: 'Вы можете заказать услугу через наш сайт или позвонив по телефону.' },
    { question: 'Какой график работы?', answer: 'Мы работаем ежедневно с 9:00 до 21:00.' },
    { question: 'Есть ли гарантия на услуги?', answer: 'Да, мы предоставляем гарантию на все наши услуги.' },
  ];

  return (

    <div className="faq-list">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>

  );
};

export default FAQ;

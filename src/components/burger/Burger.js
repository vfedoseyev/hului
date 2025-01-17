import React from 'react';
import './Burger.css';

const Burger = ({ isOpen, toggleMenu }) => {
  return (
    <button className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </button>
  );
};

export default Burger;

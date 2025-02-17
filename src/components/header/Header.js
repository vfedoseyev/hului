import React, { useState } from 'react';
import './Header.css';
import SearchBar from '../search/SearchBar';
import { Link } from 'react-router-dom';
import Burger from '../burger/Burger';
import Phone from '../phone/Phone';
import Logo from '../logo/Logo';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <Logo />
      <Burger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
        <div className='geo'>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99992 0C3.57994 0 0.80835 2.77236 0.80835 6.19234C0.80835 8.79932 4.40723 14.8066 6.11726 17.514C6.30889 17.8167 6.64259 18 7.00054 18C7.35864 17.9992 7.69164 17.8161 7.88269 17.5134C9.59326 14.8054 13.1916 8.79929 13.1916 6.1923C13.1916 2.77236 10.42 0 6.99992 0ZM6.99992 9.97275C5.0658 9.97275 3.49784 8.40501 3.49784 6.47063C3.49784 4.53647 5.06576 2.96855 6.99992 2.96855C8.93408 2.96855 10.502 4.53644 10.502 6.47063C10.502 8.40501 8.93411 9.97275 6.99992 9.97275Z" fill="#F4683F" />
          </svg>
          <span className='geo__title'>Казань</span>
        </div>
        <Link to="/catalog">Каталог</Link>
        <button className='like'>
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0004 1.90639C13.5452 -0.378355 17.4777 -0.302522 19.9293 2.15339C22.3798 4.61039 22.4643 8.52339 20.1849 11.0757L10.9983 20.2754L1.81377 11.0757C-0.465561 8.52339 -0.379978 4.60389 2.06944 2.15339C4.52319 -0.299272 8.44811 -0.381605 11.0004 1.90639ZM18.3953 3.68414C16.7703 2.05698 14.1486 1.9909 12.4478 3.51839L11.0015 4.81623L9.55419 3.51948C7.84794 1.98981 5.23169 2.05698 3.60236 3.68631C1.98819 5.30048 1.90694 7.88423 3.39436 9.59156L10.9994 17.2085L18.6044 9.59264C20.0929 7.88423 20.0116 5.30373 18.3953 3.68414Z" fill="white" />
          </svg>
        </button>
        <SearchBar />
        <Phone />

      </nav>
    </header>
  );
};

export default Header;

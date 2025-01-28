import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import Links from '../links/Links'
import Phone from '../phone/Phone'
import './Footer.css'
import Logo from '../logo/Logo';

const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className='container'>
                <footer className="footer">
                    <Logo />
                    <nav className='footer__nav'>
                        <Link to="/catalog">Каталог</Link>
                        <Phone />
                        <Links />
                    </nav>
                </footer>
            </div>
        </div>
    )
}

export default Footer;
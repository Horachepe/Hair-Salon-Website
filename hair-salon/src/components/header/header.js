import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header className="header">
            <div className="image">
                <img src="logo.png" alt="Hair Salon Logo" className="logo" />
            </div>
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'Menu'}
            </div>
            <nav className={isOpen ? 'open' : ''}>
                <ul>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
                    <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
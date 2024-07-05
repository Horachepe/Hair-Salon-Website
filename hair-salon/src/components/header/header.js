import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return(
        <header className="header">
            <div className="image">
                <img src="logo.png" alt="Hair Salon Logo" className="logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
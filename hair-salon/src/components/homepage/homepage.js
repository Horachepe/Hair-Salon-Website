import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function Homepage() {
    return (
        <div className="homepage">
            <main className="main-content">
                <h1>Beauty Hair Salon</h1>
                <p>Our team of professional stylists are here to help you look and feel your best.</p>
                <button className="gallery-button">
                    <Link to="/gallery" className="button-link">Our Gallery</Link>
                </button>
            </main>
        </div>
    );
}

export default Homepage;
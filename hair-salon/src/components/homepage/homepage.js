import React from 'react';
import './homepage.css';
import Header from '../header/header';

function Homepage() {
    return (
        <div className="homepage">
            <Header />
            <main className="main-content">
                <h1>Beauty Hair Salon</h1>
                <p>Our team of professional stylists are here to help you look and feel your best.</p>
                <button>Book Now</button>
            </main>
        </div>
    );
}

export default Homepage;
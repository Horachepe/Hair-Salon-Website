import React from 'react';
import './services.css';

function Services() {
    return (
        <div className="services">
            <h2>Our Services</h2>
            <div className="service-container">
                <div className="service-card women">
                    <h3>Women</h3>
                    <ul>
                        <li>Cut & Style</li>
                        <li>Color</li>
                        <li>Extensions</li>
                        <li>Updos</li>
                        <li>Waxing</li>
                        <li>Makeup</li>
                    </ul>
                </div>
                <div className="service-card men">
                    <h3>Men</h3>
                    <ul>
                        <li>Cut & Style</li>
                        <li>Color</li>
                        <li>Extensions</li>
                        <li>Shaving</li>
                        <li>Waxing</li>
                    </ul>
                </div>
                <div className="service-card children">
                    <h3>Children</h3>
                    <ul>
                        <li>Cut & Style</li>
                        <li>Color</li>
                        <li>Extensions</li>
                        <li>Updos</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Services;
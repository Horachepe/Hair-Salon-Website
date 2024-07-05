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
                        <li>Cut & Style <span className="price">$40</span></li>
                        <li>Color <span className="price">$40</span></li>
                        <li>Extensions <span className="price">$40</span></li>
                        <li>Updos <span className="price">$40</span></li>
                        <li>Waxing <span className="price">$40</span></li>
                        <li>Makeup <span className="price">$40</span></li>
                    </ul>
                </div>
                <div className="service-card men">
                    <h3>Men</h3>
                    <ul>
                        <li>Cut & Style <span className="price">$40</span></li>
                        <li>Color <span className="price">$40</span></li>
                        <li>Extensions <span className="price">$40</span></li>
                        <li>Shaving <span className="price">$40</span></li>
                        <li>Waxing <span className="price">$40</span></li>
                    </ul>
                </div>
                <div className="service-card children">
                    <h3>Children</h3>
                    <ul>
                        <li>Cut & Style <span className="price">$40</span></li>
                        <li>Color <span className="price">$40</span></li>
                        <li>Extensions <span className="price">$40</span></li>
                        <li>Updos <span className="price">$40</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Services;
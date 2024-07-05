import React from 'react';
import './contact.css';

function Contact() {
    return(
        <div className="contact">
            <div className="contact-info">
                <h1>Want to make a reservation?</h1>
                <p>For more information, please contact us at:</p>
                <ul>
                    <li>Phone: 281-702-6404</li>
                    <li>Phone: 555-555-5555</li>
                    <li>Email: <a href="mailto:andreaar56@yahoo.com">andreaar56@yahoo.com</a></li>
                </ul>
            </div>
            <div className="location-info">
                <h2>We are located here!</h2>
                <p>FM 1485</p>
                <p>New Caney, Texas 77357</p>
                <div className="map-container"> 
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1468.0946631518907!2d-95.2539334091523!3d30.196693234500163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86474fb38bcb15b1%3A0x18f95fccd56315fa!2sBeauty%20And%20Barber%20Shop%20Alex%20%26%20Andy!5e0!3m2!1sen!2sus!4v1720211969000!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        style={{border:0}}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
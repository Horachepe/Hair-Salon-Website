import React from 'react';
import './contact.css';

function Contact() {
    return(
        <div className="contact">
            <div className="contact-info">
                <h1>Want to make a reservation?</h1>
                <p>For more information, please contact us at:</p>
                <ul>
                    <li>Phone: 555-555-5555</li>
                    <li>Phone: 555-555-5555</li>
                    <li>Email: <a href="mailtp:arguellesgarcia.jg@gmail.com">Andrea's Email</a></li>
                </ul>
            </div>
            <div className="location-info">
                <h2>We are located here!</h2>
                <p>1234 Main St.</p>
                <p>City, State 12345</p>
                <div className="map-container"> 
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.090260576186!2d-117.91337768480107!3d33.83529338066029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf9b3b1c3d5c1%3A0x4e0e5e4b0d7d4f1d!2s1234%20Main%20St%2C%20City%2C%20State%2099999!5e0!3m2!1sen!2sus!4v1633938294214!5m2!1sen!2sus"
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
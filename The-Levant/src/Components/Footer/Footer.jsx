import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Levantine Tourism</h3>
                    <p>
                        Discover the rich heritage and timeless beauty of the Levant.
                        We bring history and nature closer to you.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Social Media</h3>
                    <p>Follow us on our social platforms for updates.</p>
                    <div className="footer-social">
                        <a href="#facebook" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#instagram" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#linkedin" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#twitter" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Contact our team to start your personalized travel experience.</p>
                    <p>Email: LevantineTourism@gmail.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Levantine Tourism. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

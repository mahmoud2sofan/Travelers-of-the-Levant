import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Levantine Tourism</h3>
                    <p>
                        Discover the rich heritage and timeless beauty of the Levant.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Social Media</h3>
                    <div className="footer-social">
                        <a href="https://www.facebook.com" target="_blank">Facebook</a>
                        <a href="https://www.instagram.com" target="_blank">Instagram</a>
                        <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
                        <a href="https://www.twitter.com" target="_blank">Twitter</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: LevantineTourism@gmail.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Levantine Tourism.</p>
            </div>
        </footer>
    );
};

export default Footer;

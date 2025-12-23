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
                        We bring history and nature closer to you.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Social Media</h3>
                    <p>Follow us on our social platforms for updates.</p>
                    <div className="footer-social">
                        <a href="#facebook" >Facebook</a>
                        <a href="#instagram">Instagram</a>
                        <a href="#linkedin" >LinkedIn</a>
                        <a href="#twitter" >Twitter</a>
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
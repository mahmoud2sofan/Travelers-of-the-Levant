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
                        <a href="#facebook" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.04 16.12 6.04V8.51H15.01C13.77 8.51 13.38 9.28 13.38 10.07V12.06H16.15L15.71 14.96H13.38V21.96C18.16 21.21 21.82 17.06 21.82 12.06C21.82 6.53 17.32 2.04 12 2.04Z" />
                            </svg>
                        </a>
                        <a href="#instagram" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.8 2C4.6 2 2 4.6 2 7.8V16.2C2 19.4 4.6 22 7.8 22H16.2C19.4 22 22 19.4 22 16.2V7.8C22 4.6 19.4 2 16.2 2H7.8ZM7.6 4H16.4C18.4 4 20 5.6 20 7.6V16.4C20 18.4 18.4 20 16.4 20H7.6C5.6 20 4 18.4 4 16.4V7.6C4 5.6 5.6 4 7.6 4ZM17.25 5.5C16.84 5.5 16.5 5.84 16.5 6.25C16.5 6.66 16.84 7 17.25 7C17.66 7 18 6.66 18 6.25C18 5.84 17.66 5.5 17.25 5.5ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9Z" />
                            </svg>
                        </a>
                        <a href="#linkedin" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452H16.892V14.88C16.892 13.553 16.866 11.838 15.035 11.838C13.178 11.838 12.894 13.287 12.894 14.787V20.452H9.339V8.998H12.75V10.56H12.798C13.273 9.66 14.432 8.71 16.162 8.71C19.762 8.71 20.447 11.08 20.447 14.137V20.452ZM5.337 7.433C4.197 7.433 3.274 6.508 3.274 5.367C3.274 4.226 4.197 3.301 5.337 3.301C6.475 3.301 7.4 4.226 7.4 5.367C7.4 6.508 6.475 7.433 5.337 7.433ZM3.56 20.452H7.115V9.006H3.56V20.452Z" />
                            </svg>
                        </a>
                        <a href="#twitter" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.21 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Standard text about contacting us.</p>
                    <p>Email: info@levantine-tourism.com</p>
                    <p>Jordan, Amman</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Levantine Tourism. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

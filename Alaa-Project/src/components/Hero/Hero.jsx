import React from 'react';
import './Hero.css';
import bgImage from '../../assets/img.jpeg';

const Hero = () => {
    const handleScroll = () => {
        const element = document.getElementById('categories');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="top-header">
            <img src={bgImage} alt="Levant Landscape" className="top-image" />
            <h1 className="header-title">THE LEVANT</h1>
            <p className="header-subtitle">
                Discover the rich history, culture, and beauty of the Levant region.
            </p>

            <div className="header-actions">
                <div className="header-action-buttons">
                    <button onClick={handleScroll} className="action-btn">
                        Explore Now
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Hero;

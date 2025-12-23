import React from 'react';
import './Hero.css';


const Hero = ({ countryName }) => {
    const handleScroll = () => {
        const element = document.getElementById('categories');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Default to 'palestine' if no countryName or fallback
    const currentCountry = countryName || 'palestine';

    // Glob import for assets
    const images = import.meta.glob('../../../assets/ExploreCountry/**/*.jpeg', { eager: true });

    // Find matching image
    const imagePathKey = Object.keys(images).find(key =>
        key.includes(`images-${currentCountry.toLowerCase()}/${currentCountry.toLowerCase()}.jpeg`)
    );
    const bgImage = imagePathKey ? images[imagePathKey].default : '';

    return (
        <header className="top-header">
            <img src={bgImage} alt={`${currentCountry} Landscape`} className="top-image" />
            <h1 className="header-title">THE LEVANT - {currentCountry.toUpperCase()}</h1>
            <p className="header-subtitle">
                Discover the rich history, culture, and beauty of {currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}.
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

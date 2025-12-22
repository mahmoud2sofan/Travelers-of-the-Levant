import React from 'react';
import './Cards.css';
import countries from './countriesData';

function Cards() {
    return (
        <section className="cards-section">
            <div className="section-header">
                <h2 className="section-title">Popular Destinations</h2>
                <p className="section-subtitle">Explore the hidden gems of the Levant</p>
            </div>

            <div className="countries-grid">
                {countries.map((country, index) => (
                    <div className="country-card" key={index}>
                        <div className="country-image">
                            <img src={country.image} alt={country.name} />
                        </div>

                        <div className="country-content">
                            <h3 className="country-name">{country.name}</h3>
                            <p className="country-description">{country.description}</p>
                            <button className="explore-button">Explore</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Cards;

import React from 'react';
import './Cards.css';
import countries from './countriesData.jsx';
import { useNavigate } from 'react-router-dom';

function Cards() {
  const navigate = useNavigate();

  return (
    <section className="cards-section">
      <div className="cards-container">
        {countries.map((country, num) => (
          <div className="country-card" key={num}>

            <div className="country-image">
              <img src={country.image} alt={country.name} />
            </div>

            <div className="country-content">
              <h3 className="country-name">{country.name}</h3>
              <p className="country-description">
                {country.description}
              </p>

              <button
                className="explore-button"
                onClick={() =>
                  navigate(/explore/${country.name.toLowerCase()})
                }
              >
                Explore
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;

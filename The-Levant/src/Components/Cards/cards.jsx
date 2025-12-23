import React from 'react';
import './Cards.css';
import countries from './countriesData.jsx';

import { useNavigate } from 'react-router-dom';

function Cards() {
  const navigate = useNavigate();
  return (
    <div className="cards-container">
      {countries.map((country, index) => (
        <div
          className="country-card"
          key={index}
          onClick={() => navigate(`/explore/${country.name.toLowerCase()}`)}
          style={{ cursor: 'pointer' }}
        >
          <div className="country-image">
            <img src={country.image} alt={country.name} />
          </div>

          <div className="country-content">
            <h3 className="country-name">{country.name}</h3>
            <p className="country-description">{country.description}</p>
            <button
              className="explore-button"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/explore/${country.name.toLowerCase()}`);
              }}
            >
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;

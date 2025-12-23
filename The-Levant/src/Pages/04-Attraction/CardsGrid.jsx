import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import './CardsGrid.css';

const CardsGrid = ({ searchQuery = '' }) => {
  const { countryName = 'Palestine', purpose = 'Nature' } = useContext(UserContext) || {};

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    let url = null;

    if (countryName === 'Palestine') {
      url = 'https://mocki.io/v1/36738a55-8abf-4014-aa44-468adfc33797'; // جاهز
      if (purpose === 'Nature') {
        url = 'https://mocki.io/v1/2712ff1a-33d2-44a1-ab77-fd4589b9cc0c'; // جاهز
      } else if (purpose === 'Religious') {
        url = 'https://mocki.io/v1/205dcd08-2286-4d01-a618-2e2251da4449'; // jahiz
      }
    } else if (countryName === 'Syria') {
      if (purpose === 'Historical') {
        url = 'https://mocki.io/v1/536bcb19-d4cb-4062-a962-d8730ab84dea'; // jaheeeez
      } else if (purpose === 'Religious') {
        url = 'https://mocki.io/v1/6bc1816c-f53d-40d1-aa0a-7a75705ee4f7'; // jaheeez
      } else if (purpose === 'Nature') {
        url = 'https://mocki.io/v1/4540a750-594c-4c8e-bd5e-38f7af7a1778'; //doneee
      }
    } else if (countryName === 'Jordan') {
      if (purpose === 'Nature') {
        url = 'https://mocki.io/v1/1dc4bffe-38b4-4c62-825a-44c70a36d352';
      } else if (purpose == 'Historical') {
        url = 'https://mocki.io/v1/b05ac1a5-fc66-47d1-bf90-3fdf287485fa';
      } else if (purpose == 'Religious'){
        url = 'https://mocki.io/v1/68d15056-379d-45ac-aac5-5ae3146c97eb;
      }
    } else if (countryName === 'Lebanon') {
      if (purpose === 'Nature') {
        url = 'https://mocki.io/v1/cddbfb24-7255-44dc-bb0a-d5609e711498';
      } else if (purpose === 'Religious') {
        url = 'https://mocki.io/v1/87104af2-2de9-4ee6-95a7-2fe020b50f05'; 
      } else if (purpose === 'Historical') {
        url = 'https://mocki.io/v1/d03812ee-ce72-4fd5-9dcf-245ed3a024ae';
      }
    }

    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const items = Array.isArray(data) ? data : (data.places || []);
          const formattedData = items.map((item, index) => ({
            id: item.id || index + 1,
            title: item.name,
            text: item.description,
          }));
          setApiData(formattedData);
        })
        .catch(err => console.error("Error fetching data:", err));
    } else {
      setApiData([]);
    }
  }, [countryName, purpose]);

  const cards = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: '',
    text: '',
    image: ''
  }));

  const availableCards = apiData.length > 0 ? apiData : cards;

  const displayCards = availableCards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? displayCards : displayCards.slice(0, 4);

  return (
    <section className="cards-section">
      <div className="cards-container">
        {displayCards.length > 0 ? (
          visibleCards.map(card => (
            <div key={card.id} className="card">
              {card.image ? (
                <img src={card.image} alt={card.title} className="card-image" />
              ) : (
                <div className="card-image"></div>
              )}
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          ))
        ) : (
          <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '20px' }}>
            <p>No results found for your search.</p>
          </div>
        )}
      </div>

      {displayCards.length > 4 && (
        <div className="show-more-container">
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
};

export default CardsGrid;

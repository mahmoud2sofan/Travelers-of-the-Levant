import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';
import './CardsGrid.css';

const CardsGrid = ({ searchQuery = '' }) => {
  const { countryName = 'Palestine', purpose = 'Nature' } = useContext(UserContext) || {};

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    let url = null;

    if (countryName === 'Palestine') {
      url = 'https://mocki.io/v1/cfbeebc9-decf-4e79-8bb6-e4ff99ad980c';
      if (purpose === 'Nature') {
        url = 'https://mocki.io/v1/8e612bdd-4007-4e96-97a1-812a87f3ae3c';
      } else if (purpose === 'Religious') {
        url = 'https://mocki.io/v1/0a208e8a-d4c6-4ac8-8c35-0a729fba41c6';
      }
    } else if (countryName === 'Syria') {
      if (purpose === 'Historical') {
        url = 'https://mocki.io/v1/e5c3b79c-6481-4ef6-a647-c88920880e2c';
      } else if (purpose === 'Religious') {
        url = 'https://mocki.io/v1/f700ecfe-b450-4a48-b858-b32660a20c41';
      } else if (purpose === 'Nature') {
        url = 'https://mocki.io/v1/4769f5f1-4650-4920-86ab-ad5b76a262d3';
      }
    } else if (countryName === 'Jordan') {
      if (purpose === 'Nature') {
        url = 'https://mocki.io/v1/e5eb2e02-9bbb-4350-9317-5c66c528949a';
      } else if (purpose == 'Historical') {
        url = 'https://mocki.io/v1/d836a547-19cf-41e8-90f1-098cc644f72e';
      }
    } else if (countryName === 'Lebanon') {
      if (purpose === 'Nature') {
        url = 'https://mocki.io/v1/b98bb451-3a08-41b8-bb81-c73369d06455';
      } else if (purpose === 'Religious') {
        url = 'https://mocki.io/v1/7330bf15-0555-45c1-9de8-2c2c45ba6f1f';
      } else if (purpose === 'Historical') {
        url = 'https://mocki.io/v1/b1befa92-58ce-47aa-8be2-5d434b9be90f';
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

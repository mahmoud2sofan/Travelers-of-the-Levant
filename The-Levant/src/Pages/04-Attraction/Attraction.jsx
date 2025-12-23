import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import './Attraction.css'
import CardsGrid from './CardsGrid'
import Footer from '../../Components/Footer/Footer'
import Nav from '../../Components/Nav/Nav'
import StorySection from './StorySection'
import FeedbackFab from './FeedbackFab'

function Attraction() {
  const ctx = useContext(UserContext) || {};
  const countryName = ctx.countryName ?? 'Palestine';
  const purpose = ctx.purpose ?? 'Nature';
  const _cn = String(countryName || '').trim();
  let imageFile = _cn.toLowerCase();

  const [searchQuery, setSearchQuery] = useState('');

  if (imageFile.includes('palestin') || imageFile.includes('فلسط')) imageFile = 'Palestine';
  else if (imageFile.includes('syria') || imageFile.includes('سوري')) imageFile = 'Syria';
  else if (imageFile.includes('lebanon') || imageFile.includes('لبنان')) imageFile = 'Lebanon';
  else if (imageFile.includes('jordan') || imageFile.includes('أردن')) imageFile = 'Jordan';
  imageFile = imageFile.replace(/\s+/g, '');

  const images = import.meta.glob('../../assets/AttractionImages/*.jpg', { eager: true });
  const imageKey = Object.keys(images).find(k => k.includes(`${imageFile}.jpg`));
  const heroImage = imageKey ? images[imageKey].default : '';


  const getHeaderDescription = () => {
    switch (purpose) {
      case "Nature":
        return `Explore the breathtaking nature of ${countryName}.`;
      case "Historical":
        return `Journey through the ancient history of ${countryName}.`;
      case "Religious":
        return `Experience the spiritual heritage of ${countryName}.`;
      default:
        return `Discover the beauty, history, and culture of ${countryName}.`;
    }
  };

  return (
    <>
      <Nav />
      <style>{`
        .home-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 22px;
          background: #28a745;
          color: #fff;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 700;
          margin-top: 12px;
          border: none;
          cursor: pointer;
          transition: background 150ms ease;
        }
        .home-btn:hover {
          background: #145A2A;
          transform: translateY(-3px);
        }
        .country-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 180px;
        }
        .country-title h1 {
          font-size: 3rem;
          color: #333;
          margin: 0 0 6px 0;
          transition: color 150ms ease, transform 150ms ease;
          cursor: default;
        }
        .country-title h1:hover {
          color: #145A2A;
          transform: translateY(-3px);
        }
        .country-title h2 {
          font-size: 1.25rem;
          color: #666;
          margin: 0;
        }
        

        .header-search-container {
          margin-top: 20px;
          width: 100%;
          max-width: 500px;
          position: relative;
        }
        
        .header-search-input {
          width: 100%;
          padding: 15px 25px;
          font-size: 1.1rem;
          border: none;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.9);
          color: #333;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        
        .header-search-input:focus {
          background: #fff;
          outline: none;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          transform: scale(1.02);
        }
        
        .header-search-input::placeholder {
          color: #666;
        }
      `}</style>

      <header
        className="hero"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Travellers Of The Levant</h1>
          <p>{getHeaderDescription()}</p>

          <div className="header-search-container">
            <input
              type="text"
              placeholder="Search for places..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="header-search-input"
            />
          </div>
        </div>
      </header>

      <section className="featured-section">
        <div className="country-title">
          <h1>{countryName}</h1>
          <h2>{purpose}</h2>

          <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
            {['Nature', 'Historical', 'Religious'].map((p) => (
              <button
                key={p}
                onClick={() => ctx.setPurpose && ctx.setPurpose(p)}
                style={{
                  padding: '10px 24px',
                  fontSize: '1rem',
                  fontWeight: purpose === p ? 'bold' : 'normal',
                  borderRadius: '40px',
                  border: 'none',
                  backgroundColor: purpose === p ? '#28a745' : '#e0e0e0',
                  color: purpose === p ? '#fff' : '#333',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: purpose === p ? '0 4px 10px rgba(40, 167, 69, 0.3)' : 'none'
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>
      <CardsGrid searchQuery={searchQuery} />
      <StorySection />
      <FeedbackFab />
      <Footer />
    </>
  )
}

export default Attraction

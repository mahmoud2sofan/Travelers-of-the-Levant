import { useContext } from "react";
import { UserContext } from "./UserContext";
import './App.css'
import CardsGrid from './components/CardsGrid'
import { useNavigate } from 'react-router-dom';

function ExploreCountry() {
  const ctx = useContext(UserContext) || {};
  const countryName = ctx.countryName ?? 'Palestine';
  const purpose = ctx.purpose ?? 'Nature';
  const navigate = useNavigate();
  const _cn = String(countryName || '').trim();
  let imageFile = _cn.toLowerCase();
  if (imageFile.includes('palestin') || imageFile.includes('فلسط')) imageFile = 'Palestine';
  else if (imageFile.includes('syria') || imageFile.includes('سوري')) imageFile = 'Syria';
  imageFile = imageFile.replace(/\s+/g, '');
  imageFile = 'Syria';

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
      `}</style>

      <header
        className="hero"
        style={{ backgroundImage: `url('/${imageFile}.jpg')` }}
      >
        <div className="hero-content">
          <h1>The Levant Traveler</h1>
          <p>{getHeaderDescription()}</p>
          <button onClick={() => navigate('/')} className="home-btn">Home</button>
        </div>
      </header>

      <section className="featured-section">
        <div className="country-title">
          <h1>{countryName}</h1>
          <h2>{purpose}</h2>
        </div>
      </section>
      <CardsGrid />
    </>
  )
}


export default ExploreCountry

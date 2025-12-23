import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { countryName, setCountryName, purpose, setPurpose } = useContext(UserContext);
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/explore');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to The Levant Traveler</h1>
      <div style={{ margin: '20px 0' }}>
        <label>
          Select Country:
          <select value={countryName} onChange={(e) => setCountryName(e.target.value)}>
            <option value="Palestine">Palestine</option>
            <option value="Syria">Syria</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Jordan">Jordan</option>
          </select>
        </label>
      </div>
      <div style={{ margin: '20px 0' }}>
        <label>
          Select Purpose:
          <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            <option value="Nature">Nature</option>
            <option value="Historical">Historical</option>
            <option value="Religious">Religious</option>
          </select>
        </label>
      </div>
      <button onClick={handleExplore} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Explore {countryName} for {purpose}
      </button>
    </div>
  );
}

export default Home;
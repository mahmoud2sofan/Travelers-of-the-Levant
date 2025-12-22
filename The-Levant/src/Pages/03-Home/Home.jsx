import React from 'react';
import './Home.css';
import Nav from '../01-Common/Nav/Nav.jsx';
import Footer from '../01-Common/Footer/Footer.jsx';
import Cards from '../../Components/Cards/cards.jsx';

function Home() {
  return (
    <div className="home-container">
      <Nav />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Nav from '../../Components/Nav/Nav.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Cards from '../../Components/Cards/cards.jsx';
import Htitle from '../../Components/HomeTitle/Htitle.jsx';


function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/');
  }, [navigate]);

  return (
    <div className="home-container">
      <Nav />

      <Htitle
        title="Popular Destinations"
        subtitle="Explore the hidden gems of the Levant"
      />

      <Cards />
      <Footer />
    </div>
  );
}

export default Home;

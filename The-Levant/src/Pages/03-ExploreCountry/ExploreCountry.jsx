import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Hero from './Hero/Hero';
import Categories from './Categories/Categories';

function ExploreCountry() {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const { setCountryName } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (countryName) {
      const normalized = countryName.charAt(0).toUpperCase() + countryName.slice(1).toLowerCase();
      setCountryName(normalized);
    }
  }, [countryName, setCountryName]);

  return (
    <>
      <Nav />
      <Hero countryName={countryName} />
      <Categories countryName={countryName} />
      <Footer />
    </>
  );
}

export default ExploreCountry;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/01-Login/Login';
import Home from './Pages/02-Home/Home';
import AboutUs from './Pages/06-AboutUs/AboutUs';
import HireAGuide from './Pages/05-HireAGuide/HireAGuide';
import ExploreCountry from './Pages/03-ExploreCountry/ExploreCountry';
import Attraction from './Pages/04-Attraction/Attraction';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/hire-guide" element={<HireAGuide />} />
        <Route path="/explore/:countryName" element={<ExploreCountry />} />
        <Route path="/attraction" element={<Attraction />} />
      </Routes >
    </Router >
  );
}

export default App;

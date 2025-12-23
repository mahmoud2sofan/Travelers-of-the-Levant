import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/01-Login/Login';
import Home from './Pages/02-Home/Home';
import AboutUs from './Pages/06-AboutUs/AboutUs';
import HireAGuide from './Pages/05-HireAGuide/HireAGuide';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/hire-guide" element={<HireAGuide />} />
      </Routes>
    </Router>
  );
}

export default App;

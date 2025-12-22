import React from 'react';
import './Htitle.css';

function Htitle({ title, subtitle }) {
  return (
    <div className="htitle-container">
      <h2 className="htitle-text">{title}</h2>
      <p className="htitle-subtitle">{subtitle}</p>
    </div>
  );
}

export default Htitle;

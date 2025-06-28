import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HelpOptionCard.css';

const HelpOptionCard = ({ title, icon, description, items, ctaText, ctaLink }) => {
  return (
    <div className="help-option-card">
      <div className="option-icon">{icon}</div>
      <h3>{title}</h3>
      <p className="option-description">{description}</p>
      
      <ul className="option-items">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <Link to={ctaLink} className="option-button">
        {ctaText}
      </Link>
    </div>
  );
};

export default HelpOptionCard;
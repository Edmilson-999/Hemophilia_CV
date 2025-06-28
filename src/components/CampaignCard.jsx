import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CampaignCard.css';

const CampaignCard = ({ title, description, progress, goal }) => {
  return (
    <div className="campaign-card">
      <h3>{title}</h3>
      <p className="campaign-description">{description}</p>
      
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className="campaign-meta">
        <span className="progress-text">{progress}% concluído</span>
        <span className="campaign-goal">Meta: {goal}</span>
      </div>
      
      <Link to="#" className="campaign-button">
        Participar
      </Link>
    </div>
  );
};

export default CampaignCard;
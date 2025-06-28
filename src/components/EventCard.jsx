import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EventCard.css';

const EventCard = ({ title, date, location, description }) => {
  return (
    <div className="event-card">
      <div className="event-date">
        <span className="day">{new Date(date).getDate()}</span>
        <span className="month">{new Date(date).toLocaleString('pt-CV', { month: 'short' })}</span>
      </div>
      <div className="event-info">
        <h3>{title}</h3>
        <p className="event-location">📍 {location}</p>
        <p className="event-description">{description}</p>
        <Link to="#" className="event-link">Mais detalhes</Link>
      </div>
    </div>
  );
};

export default EventCard;
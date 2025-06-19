import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroBanner.css';  

const HeroBanner = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {ctaText && ctaLink && (
          <Link to={ctaLink} className="cta-button">
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
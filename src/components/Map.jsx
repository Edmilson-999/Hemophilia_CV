import React from 'react';
import '../styles/Map.css';

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Localização da Associação"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.478948634498!2d-23.51382117073272!3d14.921542399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDU1JzE3LjYiTiAyM8KwMzAnNDkuNyJX!5e0!3m2!1spt-PT!2scv!4v1620000000000!5m2!1spt-PT!2scv"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
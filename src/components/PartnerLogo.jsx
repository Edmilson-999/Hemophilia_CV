import React from 'react';
import '../styles/PartnerLogo.css';

const PartnerLogo = ({ name, logo }) => {
  return (
    <div className="partner-logo">
      <img src={logo} alt={name} title={name} />
      <p>{name}</p>
    </div>
  );
};

export default PartnerLogo;
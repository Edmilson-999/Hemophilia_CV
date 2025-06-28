import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import '../styles/SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <FaYoutube />
      </a>
      <a href="https://wa.me/2381234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialMedia;
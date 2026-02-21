import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "919016379828";
  const message = "Hii! I would like to know more about your tour packages.";
  
  // Create the link
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="wa-floating-wrapper">
      {/* Label that shows on hover */}
      <span className="wa-tooltip">Chat with us</span>
      
      <a 
        href={whatsappUrl} 
        className="wa-link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
        {/* Animated pulse ring */}
        <span className="wa-pulse"></span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
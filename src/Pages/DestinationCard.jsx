import React from 'react';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import './DestinationCard.css';

// Importing one image to use as the showcase
import showcaseImg from '../assets/travel-1.png';

const DestinationCard = ({ item }) => {
  // Format price to Indian Rupees
  const formatINR = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="luxury-shop-card">
      <div className="card-visual">
        <img src={showcaseImg} alt="Luxury Destination" className="main-image" />
        
        {/* Hover Elements */}
        <div className="card-overlay">
          <button className="shop-cta">VIEW COLLECTION</button>
        </div>
        
        <div className="badge-exclusive">2026 EDITION</div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <span className="category-tag">{item?.category || "PREMIUM"}</span>
          <span className="location"><FaMapMarkerAlt /> {item?.location || "India"}</span>
        </div>
        
        <h3 className="destination-name">{item?.name || "The Ethereal Journey"}</h3>
        
        <div className="card-footer">
          <div className="price-box">
            <span className="label">Starts at</span>
            <span className="amount">{formatINR(item?.price || 45000)}</span>
          </div>
          <button className="round-arrow-btn">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
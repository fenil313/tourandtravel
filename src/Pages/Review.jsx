import React, { useState } from 'react';
import { useReviews } from '../context/ReviewContext';
import { FaStar, FaMapMarkerAlt, FaChevronDown, FaQuoteLeft, FaCalendarAlt, FaTrashAlt, FaFilter, FaBolt } from 'react-icons/fa';
import '../styles/Review.css';

const Review = () => {
  const { reviews, deleteReview } = useReviews();
  const [activeIndex, setActiveIndex] = useState(null);
  const [filterRating, setFilterRating] = useState('All');

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredReviews = filterRating === 'All' 
    ? reviews 
    : reviews.filter(rev => rev.rating === Number(filterRating));

  return (
    <div className="brutal-review-section">
      <div className="brutal-container">
        
        {/* HEADER AREA */}
        <header className="about-header-row">
          <span className="ink-tag">VOYAGER FEEDBACK</span>
          <h1 className="brutal-title">
            THE PASSAGE <span className="orange-text">OF TRUST</span>
          </h1>
        </header>

        {/* BRUTAL FILTER BAR */}
        <div className="brutal-filter-box">
          <div className="filter-header">
            <FaBolt /> <span>FILTER BY RATING</span>
          </div>
          <div className="filter-options-grid">
            {['All', 5, 4, 3, 2, 1].map((rating) => (
              <button 
                key={rating} 
                className={filterRating === rating ? 'filter-btn-brutal active' : 'filter-btn-brutal'}
                onClick={() => {
                  setFilterRating(rating);
                  setActiveIndex(null);
                }}
              >
                {rating === 'All' ? 'ALL' : `${rating}★`}
              </button>
            ))}
          </div>
        </div>

        {/* ACCORDION LIST */}
        <div className="brutal-accordion-stack">
          {filteredReviews.length === 0 ? (
            <div className="empty-state-brutal">NO RECORDS FOUND IN ARCHIVE.</div>
          ) : (
            filteredReviews.map((rev, index) => (
              <div 
                key={rev.id} 
                className={`brutal-card-item ${activeIndex === index ? 'expanded' : ''}`}
              >
                <div className="brutal-card-header" onClick={() => toggleAccordion(index)}>
                  <div className="header-info">
                    <h3>{rev.name}</h3>
                    <div className="location-text"><FaMapMarkerAlt /> {rev.trip}</div>
                  </div>
                  
                  <div className="header-meta">
                    <div className="star-box">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < rev.rating ? "star-ink" : "star-dim"} />
                      ))}
                    </div>
                    <div className={`brutal-arrow ${activeIndex === index ? 'open' : ''}`}>
                      <FaChevronDown />
                    </div>
                  </div>
                </div>

                <div className="brutal-card-content">
                  <div className="expanded-story">
                    <FaQuoteLeft className="check-icon" style={{fontSize: '2rem', marginBottom: '15px'}} />
                    <p className="lead-text">"{rev.comment}"</p>
                    
                    <div className="brutal-footer-row">
                      <div className="date-sticker"><FaCalendarAlt /> {rev.date}</div>
                      <button 
                        className="delete-brutal-btn"
                        onClick={(e) => { e.stopPropagation(); deleteReview(rev.id); }}
                      >
                        <FaTrashAlt /> WIPE DATA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
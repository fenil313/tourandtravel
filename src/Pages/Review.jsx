import React from 'react';
import { FaStar, FaQuoteRight, FaMapMarkerAlt } from 'react-icons/fa';
import './Review.css';

const reviews = [
  {
    id: 1,
    name: "Rajesh Mehta",
    trip: "Varanasi Spiritual Tour",
    comment: "Umiya Travels organized the most peaceful trip to the Ghats. The attention to detail was incredible. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
    sticker: "https://cdn-icons-png.flaticon.com/512/3504/3504104.png" // Horse Sticker
  },
  {
    id: 2,
    name: "Anjali Gupta",
    trip: "Kashmir Paradise",
    comment: "The group booking for our family was seamless. The houseboat and the transport stickers were a reality. Best experience!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    sticker: "https://cdn-icons-png.flaticon.com/512/7893/7893979.png" // Plane Sticker
  },
  {
    id: 3,
    name: "David Wilson",
    trip: "Taj Mahal Heritage",
    comment: "Everything was perfectly timed. We didn't have to wait anywhere. Truly professional and reliable staff.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    sticker: "https://cdn-icons-png.flaticon.com/512/3448/3448339.png" // Bus Sticker
  },
  {
    id: 4,
    name: "Priya Sharma",
    trip: "Dubai Skyline",
    comment: "Luxury redefined. From the visa process to the city tour, Umiya Travels handled everything with grace.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400",
    sticker: "https://cdn-icons-png.flaticon.com/512/3211/3211514.png" // Train/Transport Sticker
  }
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <header className="reviews-intro">
        <h1 className="outline-title">CLIENT <span className="solid-title">VOICES</span></h1>
        <p>Real experiences from our global family of travelers.</p>
        <div className="header-underline"></div>
      </header>

      <div className="reviews-container">
        {reviews.map((rev) => (
          <div key={rev.id} className="button-89-review-box">
            <div className="review-card-inner">
              
              {/* Sticker Style Profile */}
              <div className="profile-sticker-wrapper">
                <img src={rev.avatar} alt={rev.name} className="reviewer-img" />
                <div className="transport-badge">
                  <img src={rev.sticker} alt="Transport" />
                </div>
              </div>

              <div className="review-text-content">
                <div className="star-rating">
                  {[...Array(rev.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                
                <FaQuoteRight className="quote-mark" />
                
                <p className="user-comment">"{rev.comment}"</p>
                
                <div className="user-details">
                  <h4 className="user-name">{rev.name}</h4>
                  <span className="user-trip"><FaMapMarkerAlt /> {rev.trip}</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
import React, { useState } from 'react';
import { useReviews } from '../context/ReviewContext';
import { useDestinations } from '../context/DestinationContext'; 
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane, FaStamp, FaUserAlt, FaMapMarkedAlt, FaStar, FaPenNib } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const { addReview } = useReviews();
  const { destinations } = useDestinations(); 
  const navigate = useNavigate();
  
  const [status, setStatus] = useState("ISSUE DOCUMENT");
  const [rating, setRating] = useState(5);
  const [form, setForm] = useState({ name: '', horizon: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("STAMPING...");

    const newReview = {
      id: Date.now(),
      name: form.name,
      trip: form.horizon,
      comment: form.message,
      rating: rating,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase(),
    };

    setTimeout(() => {
      addReview(newReview);
      setStatus("VALIDATED");
      setTimeout(() => navigate('/reviews'), 1000);
    }, 1500);
  };

  return (
    <div className="contact-premium-root">
      <div className="registry-card">
        <header className="registry-header">
          <div className="header-text">
            <h2> CONTACT<span>  US</span></h2>
          </div>
          <FaStamp className="stamp-seal" />
        </header>

        <form className="registry-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label><FaUserAlt /> PASSENGER NAME</label>
            <input 
              type="text" required placeholder="Enter Legal Name"
              onChange={(e) => setForm({...form, name: e.target.value})} 
            />
          </div>

          <div className="input-group">
            <label><FaMapMarkedAlt /> DESTINATION VISITED</label>
            <select required defaultValue="" onChange={(e) => setForm({...form, horizon: e.target.value})}>
              <option value="" disabled>Select Location</option>
              {destinations.map((loc) => (
                <option key={loc.id} value={loc.name}>{loc.name}</option>
              ))}
            </select>
          </div>

          <div className="rating-area">
            <label>RATING</label>
            <div className="stars-row">
              {[1,2,3,4,5].map((s) => (
                <FaStar key={s} className={rating >= s ? "gold-star" : "grey-star"} onClick={() => setRating(s)} />
              ))}
            </div>
          </div>

          <div className="input-group">
            <label><FaPenNib /> YOUR  NARRATIVE</label>
            <textarea required placeholder="Log your experience..." onChange={(e) => setForm({...form, message: e.target.value})} />
          </div>

          <button type="submit" className="submit-auth-btn">
            {status} <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
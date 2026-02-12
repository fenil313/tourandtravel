import React from 'react';
import { FaUsers, FaSuitcase, FaMapMarkedAlt } from 'react-icons/fa';
import './GroupBooking.css';

const GroupBooking = () => {
  return (
    <div className="group-booking-container">
      {/* Header with Floating Sticker */}
      <header className="group-hero">
        <div className="group-sticker-main">
          <img src="https://cdn-icons-png.flaticon.com/512/3504/3504104.png" alt="Horse Carriage" />
        </div>
        <h1 className="outline-h1">GROUP <span className="solid-h1">TRAVEL</span></h1>
        <p className="subtitle">Curated journeys for teams, families, and explorers.</p>
      </header>

      <div className="booking-layout">
        {/* Left Side: Features with mini stickers */}
        <div className="features-sidebar">
          <div className="feature-card">
            <div className="icon-sticker plane-s"><img src="https://cdn-icons-png.flaticon.com/512/7893/7893979.png" alt="Plane" /></div>
            <h3>Air & Land Sync</h3>
            <p>Seamless coordination between flights and local bus transit for your entire group.</p>
          </div>

          <div className="feature-card">
            <div className="icon-sticker bus-s"><img src="https://cdn-icons-png.flaticon.com/512/3448/3448339.png" alt="Bus" /></div>
            <h3>Private Heritage Bus</h3>
            <p>Exclusive luxury coaches for Varanasi ghat tours and Taj Mahal expeditions.</p>
          </div>

          <div className="feature-card">
            <div className="icon-sticker train-s"><img src="https://cdn-icons-png.flaticon.com/512/3211/3211514.png" alt="Train" /></div>
            <h3>Railway Charters</h3>
            <p>Group bookings for the most scenic rail routes across the Kashmir Valley.</p>
          </div>
        </div>

        {/* Right Side: The Button-89 Styled Form Box */}
        <div className="button-89-form-container">
          <div className="form-inner">
            <h2 className="form-title">Request a Quote</h2>
            <form className="group-form">
              <div className="input-field">
                <label>Group Leader Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>

              <div className="input-row">
                <div className="input-field">
                  <label>Total Members</label>
                  <input type="number" placeholder="10+" required />
                </div>
                <div className="input-field">
                  <label>Destination</label>
                  <select>
                    <option>Varanasi & Gaya</option>
                    <option>Taj Mahal Heritage</option>
                    <option>Kashmir Alpine</option>
                    <option>Paris & Eiffel</option>
                  </select>
                </div>
              </div>

              <div className="input-field">
                <label>Preferred Transport</label>
                <div className="radio-group">
                  <label><input type="radio" name="trans" /> Private Bus</label>
                  <label><input type="radio" name="trans" /> Flight</label>
                  <label><input type="radio" name="trans" /> Horse Carriage</label>
                </div>
              </div>

              <div className="input-field">
                <label>Additional Notes</label>
                <textarea placeholder="Tell us about your trip..."></textarea>
              </div>

              <button type="submit" className="button-89-submit">
                SEND MANIFESTO
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupBooking;
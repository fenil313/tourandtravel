import React from 'react';
import { 
  FaGlobe, 
  FaUsers, 
  FaSuitcaseRolling, 
  FaArrowRight, 
  FaPhoneAlt,
  FaCheckCircle 
} from 'react-icons/fa';
import './About.css';

// Asset Imports
import mainTravel from '../assets/travel-2.png';
import subTravel from '../assets/travel-1.png';
import carriageSticker from '../assets/carriage.svg'; 

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="brutal-container">
        
        {/* TOP ROW */}
        <div className="about-header-row">
          <div className="ink-tag">ESTABLISHED 2026</div>
          <h1 className="brutal-title">
            Umiya Trvels <span className="orange-text">JOURNEYS</span>
          </h1>
        </div>

        <div className="about-main-grid">
          
          {/* LEFT: VISUAL COMPOSITION WITH OVERLAPPING CARRIAGE */}
          <div className="about-visuals">
            <div className="gravity-frame-main">
              <img src={mainTravel} alt="Umiya Main" className="arch-img" />
              
              {/* THE CARRIAGE STICKER - Repositioned near images */}
              <div className="carriage-sticker-overlap">
                <img src={carriageSticker} alt="Heritage Carriage" />
                <span className="sticker-label">HERITAGE MODE</span>
              </div>

              <div className="gravity-frame-sub">
                <img src={subTravel} alt="Umiya Sub" className="sub-img" />
                <div className="ink-sticker-badge">GLOBAL OPS</div>
              </div>
            </div>
          </div>

          {/* RIGHT: EXPANDED TEXT & FEATURES */}
          <div className="about-content">
            <h2 className="content-subheading">THE UMIYA PHILOSOPHY</h2>
            <p className="lead-text">
              For over two decades, <strong>Umiya Travels</strong> has been the silent engine behind 
              thousands of global explorations. We don't just facilitate movement; we curate 
              high-contrast experiences that bridge the gap between ancient heritage and modern luxury.
            </p>

            <div className="expanded-story">
              <p>
                From our humble beginnings in 1998, we have evolved into a neubrutalist force in the 
                travel industry—stripping away the fluff to provide <strong>bold, transparent, and reliable</strong> 
                services. Whether it's a 100-member corporate retreat or a solo expedition to the 
                unknown, our logistics are built on an ironclad foundation of precision.
              </p>
              
              <ul className="bullet-list">
                <li><FaCheckCircle className="check-icon" /> 24/7 Global Ground Coordination</li>
                <li><FaCheckCircle className="check-icon" /> Exclusive Access to Heritage Sites</li>
                <li><FaCheckCircle className="check-icon" /> Transparent Pricing with Zero Hidden Fees</li>
              </ul>
            </div>

            <div className="feat-grid">
              <div className="feat-card-tilt">
                <FaUsers className="feat-icon" />
                <h3>Mass Movement</h3>
                <p>Specialized logistics for large scale group bookings.</p>
              </div>
              <div className="feat-card-tilt">
                <FaSuitcaseRolling className="feat-icon" />
                <h3>Bespoke Kit</h3>
                <p>Personalized itineraries designed for the bold.</p>
              </div>
            </div>

            <div className="about-cta-row">
              {/* <button className="brutal-btn-primary">
                START YOUR STORY <FaArrowRight />
              </button> */}
              
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
import React from 'react';
import { FaUsers, FaSuitcaseRolling, FaGlobe, FaCertificate, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import '../styles/About.css';

// Importing your specific assets
import mainTravel from '../assets/travel-2.png';
import subTravel from '../assets/travel-1.png';

const AboutUs = () => {
  return (
    <div className="dest-master-wrapper">
      {/* 1. NAVBAR OVERLAP FIX */}
      <div className="nav-safe-gap"></div>

      <div className="dest-layout-grid">
        
        {/* --- SIDEBAR: MISSION REGISTRY --- */}
        <aside className="dest-sidebar-nav">
          <div className="sidebar-sticky-inner">
            <h2 className="brand-title">Our <span>Legacy</span></h2>
            
            <div className="filter-group">
              <div className="stat-box-brutal">EST. 2026</div>
            </div>

            <div className="category-stack">
              <div className="about-sidebar-item">
                <FaCertificate className="sidebar-icon" />
                <div className="sidebar-text-block">
                  <label>CERTIFIED</label>
                  <p>Global Logistics Standard ISO-9001</p>
                </div>
              </div>
              <div className="about-sidebar-item">
                <FaShieldAlt className="sidebar-icon" />
                <div className="sidebar-text-block">
                  <label>SECURED</label>
                  <p>End-to-end encrypted travel coordination.</p>
                </div>
              </div>
            </div>

            <div className="filter-group" style={{marginTop: '30px'}}>
              <label>GLOBAL REACH</label>
              <div className="custom-range-slider-mock">
                 <div className="slider-fill" style={{width: '85%'}}></div>
              </div>
              <div className="range-labels">
                 <span>LOCAL</span>
                 <span>85% GLOBAL</span>
              </div>
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="dest-main-view">
          
          {/* HEADER BOX */}
          <header className="dest-view-header">
            <div className="header-info-box">
              <h1>The Umiya <span>Travels</span></h1>
            </div>
           
          </header>

          {/* LARGE HERO SECTION */}
          <section className="dest-card-box hero-card-spacing">
            <div className="card-media-wrapper hero-image-height">
              <img src={mainTravel} alt="Umiya Journey" />
              <div className="card-price-overlay">SINCE 1998</div>
            </div>
            <div className="card-content-wrapper">
              <span className="card-category-text">Our Core Story</span>
              <h2 className="card-title-text" style={{fontSize: '2.5rem', lineHeight: '1.1'}}>
                Redefining the architecture of modern exploration.
              </h2>
              <p className="card-desc-text">
                Umiya Travels doesn't just book tickets; we engineer journeys. Born from a vision to 
                strip away the clutter of traditional travel agencies, we adopted a <strong>Brutalist 
                Approach</strong>—focusing on raw reliability, transparent pricing, and structural 
                integrity in every itinerary we build. Whether it's a corporate retreat or a solo 
                expedition, our logistics are built on an ironclad foundation.
              </p>
            </div>
          </section>

          {/* 3-COLUMN FEATURE GRID */}
          <div className="dest-images-grid">
            
            {/* Feature 1 */}
            <article className="dest-card-box">
              <div className="card-content-wrapper">
                <FaUsers className="about-feat-icon" />
                <span className="card-category-text">Collective</span>
                <h3 className="card-title-text">Mass Movement</h3>
                <p className="card-desc-text">Specialized logistics for large-scale corporate groups and heritage tours with zero friction.</p>
                <button className="card-book-btn">READ PROTOCOL <FaArrowRight /></button>
              </div>
            </article>

            {/* Feature 2 */}
            <article className="dest-card-box">
              <div className="card-content-wrapper">
                <FaSuitcaseRolling className="about-feat-icon" />
                <span className="card-category-text">Precision</span>
                <h3 className="card-title-text">Bespoke Kit</h3>
                <p className="card-desc-text">Tailored travel hardware and itineraries designed for the most demanding global explorers.</p>
                <button className="card-book-btn">READ PROTOCOL <FaArrowRight /></button>
              </div>
            </article>

            {/* Feature 3 */}
            <article className="dest-card-box">
              <div className="card-content-wrapper">
                <FaGlobe className="about-feat-icon" />
                <span className="card-category-text">Network</span>
                <h3 className="card-title-text">Global Ops</h3>
                <p className="card-desc-text">24/7 ground coordination across 45+ territories with an ironclad foundation of precision.</p>
                <button className="card-book-btn">READ PROTOCOL <FaArrowRight /></button>
              </div>
            </article>

          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutUs;
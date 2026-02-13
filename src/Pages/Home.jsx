import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft, FaBolt, FaGlobe } from 'react-icons/fa';
import './Home.css';

// Assets
import img1 from '../assets/travel-1.png';
import img2 from '../assets/travel-2.png';
import img3 from '../assets/travel-3.png';
import img4 from '../assets/travel-4.png';

const slides = [
  { id: 1, title: "RADICAL", sub: "JOURNEYS", img: img1, color: "#ff4d00" },
  { id: 2, title: "BEYOND", sub: "HORIZONS", img: img2, color: "#00adef" }
];

const Home = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="zigzag-root">
      
      {/* --- SECTION 1: THE HERO --- */}
      <section className="brutal-hero">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`brutal-slide ${index === active ? 'active' : ''}`}>
            <div className="hero-text-block">
              <h1 className="giant-title">{slide.title}</h1>
              <h2 className="outline-sub">{slide.sub}</h2>
              <div className="custom-nav">
                <button onClick={() => setActive(active === 0 ? slides.length - 1 : active - 1)}><FaArrowLeft /></button>
                <button onClick={nextSlide}><FaArrowRight /></button>
              </div>
            </div>
            <div className="hero-visual-block">
              <div className="slanted-frame">
                <img src={slide.img} alt="Hero" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- THE ZIGZAG DIVIDER --- */}
      <div className="zigzag-divider"></div>

      {/* --- SECTION 2: THE ABOUT US --- */}
      <section className="scatter-about">
        <div className="container">
          
          <div className="about-header-top">
            <div className="title-wrap">
              <span className="brutal-tag">// ORIGIN STORY</span>
              <h2 className="section-heading">ABOUT US</h2>
            </div>
            {/* BUTTON ON THE UPPER SIDE */}
            <button className="upper-cta" onClick={() => navigate('/about')}>
              DISCOVER MORE <FaArrowRight />
            </button>
          </div>

          <div className="scatter-layout">
            {/* UNIQUE SCATTERED BENTO GRID */}
            <div className="scatter-grid">
              <div className="s-box b1"><img src={img1} alt="1" /></div>
              <div className="s-box b2"><img src={img2} alt="2" /></div>
              <div className="s-box b3"><img src={img3} alt="3" /></div>
              <div className="s-box b4"><img src={img4} alt="4" /></div>
            </div>

            <div className="scatter-text">
              <h3 className="sub-heading">HIGH-CONTRAST <span className="accent">LOGISTICS</span></h3>
              <p className="p-desc">
                We don't do middle ground. We provide ironclad travel coordination 
                for those who demand precision. Umiya is the bridge between 
                rugged exploration and refined execution.
              </p>
              <div className="stat-row">
                <div className="stat-card"><FaBolt /> <h4>Instant Sync</h4></div>
                <div className="stat-card"><FaGlobe /> <h4>Global Reach</h4></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
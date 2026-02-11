import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './Home.css';

// Local Assets
import img1 from '../assets/travel-1.png';
import img2 from '../assets/travel-2.png';
import img3 from '../assets/travel-3.png';

const slides = [
  {
    id: 1,
    title: "ADVENTURE",
    splitText: "THE UNKNOWN",
    tag: "Mountain Escapes",
    img: img1,
    accent: "#ff4d00"
  },
  {
    id: 2,
    title: "HORIZON",
    splitText: "BEYOND BLUE",
    tag: "Ocean Breezes",
    img: img2,
    accent: "#00adef"
  },
  {
    id: 3,
    title: "CULTURE",
    splitText: "ROYAL PATHS",
    tag: "Heritage Tours",
    img: img3,
    accent: "#ffb606"
  }
];

const Home = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () => setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Helper to split text for "React Bits" animation effect
  const renderSplitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div className="home-hero">
      <div className="carousel-wrapper">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`hero-slide ${index === active ? 'active' : ''}`}>
            
            {/* Background Split Text (Large Watermark) */}
            <div className="split-watermark">
              {renderSplitText(slide.title)}
            </div>

            <div className="hero-grid">
              {/* Text Side */}
              <div className="hero-text-side">
                <span className="hero-tag" style={{ borderLeftColor: slide.accent }}>
                  {slide.tag}
                </span>
                
                <h1 className="split-main-title">
                  <div className="title-top">{slide.title}</div>
                  <div className="title-bottom">
                    {renderSplitText(slide.splitText)}
                  </div>
                </h1>

                <p className="hero-subtext">
                  Precision-crafted travel experiences that redefine 
                  the way you see the world.
                </p>

                <div className="hero-btn-row">
                  <button className="button-54">Book Journey</button>
                  <button className="btn-ghost">View Gallery</button>
                </div>
              </div>

              {/* Image Side */}
              <div className="hero-img-side">
                <div className="img-container">
                  <img src={slide.img} alt={slide.title} />
                  <div className="img-accent-box" style={{ background: slide.accent }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Custom Navigation Icons */}
        <div className="hero-controls">
          <button className="control-btn" onClick={prevSlide}><FaArrowLeft /></button>
          <button className="control-btn" onClick={nextSlide}><FaArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
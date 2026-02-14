import React, { useState, useEffect } from 'react';
import { FaCompass, FaChevronRight, FaChevronLeft, FaExpandAlt } from 'react-icons/fa';
import './Explore.css';

// Using local assets as requested
const travelData = [
  { id: "01", city: "DUBAI", tag: "SKYLINE", color: "#FFD700", imgs: ["../assets/destinations/dubai1.jpg", "../assets/destinations/dubai2.jpg", "../assets/destinations/dubai3.jpg", "../assets/destinations/dubai4.jpg"] },
  { id: "02", city: "LONDON", tag: "HERITAGE", color: "#0052ff", imgs: ["../assets/destinations/uk1.jpg", "../assets/destinations/uk2.jpg", "../assets/destinations/uk3.jpg", "../assets/destinations/uk4.jpg"] },
  { id: "03", city: "PARIS", tag: "ROMANCE", color: "#ff2d55", imgs: ["../assets/destinations/paris1.jpg", "../assets/destinations/paris2.jpg", "../assets/destinations/paris3.jpg", "../assets/destinations/paris4.jpg"] },
  { id: "04", city: "VARANASI", tag: "SPIRIT", color: "#ff8c00", imgs: ["../assets/destinations/vns1.jpg", "../assets/destinations/vns2.jpg", "../assets/destinations/vns3.jpg", "../assets/destinations/vns4.jpg"] }
];

const Explore = () => {
  const [active, setActive] = useState(0);
  const [subSlide, setSubSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSubSlide((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(timer);
  }, [active]);

  const changeLocation = (direction) => {
    if (direction === 'next') setActive((prev) => (prev + 1) % travelData.length);
    else setActive((prev) => (prev === 0 ? travelData.length - 1 : prev - 1));
    setSubSlide(0);
  };

  const current = travelData[active];

  return (
    <div className="horizon-root" style={{ '--accent': current.color }}>
      {/* Background Text Distortion */}
      <div className="bg-glitch-text">{current.city}</div>

      <div className="horizon-main">
        {/* Left: Interactive Controls */}
        <div className="side-nav">
          <div className="nav-brand">UMIYA<span>.</span>EX</div>
          <div className="nav-numbers">
            {travelData.map((item, i) => (
              <span key={item.id} className={i === active ? 'active' : ''} onClick={() => setActive(i)}>
                {item.id}
              </span>
            ))}
          </div>
        </div>

        {/* Center: The Experience Core */}
        <div className="experience-core">
          <div className="text-content">
            <span className="location-chip"><FaCompass /> {current.tag}</span>
            <h1 className="display-city">{current.city}</h1>
            <div className="cta-group">
              <button className="main-cta">START VOYAGE <FaExpandAlt /></button>
            </div>
          </div>

          <div className="visual-stack">
            {current.imgs.map((img, i) => (
              <div 
                key={i}
                className={`depth-card card-${i} ${i === subSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${require(`../../assets/destinations/${img}`)})` }}
              >
                <div className="glass-reflection"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Navigation Arrows */}
        <div className="flow-controls">
          <button onClick={() => changeLocation('prev')}><FaChevronLeft /></button>
          <div className="control-divider"></div>
          <button onClick={() => changeLocation('next')}><FaChevronRight /></button>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="status-bar">
        <div className="coord-data">LAT: 25.2048 | LONG: 55.2708</div>
        <div className="progress-container">
          <div className="progress-fill" style={{ width: `${((active + 1) / travelData.length) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
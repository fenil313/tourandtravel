import React from 'react';
import './About.css';

// Importing your downloaded images
// Replace these paths with your actual local file names
import img1 from '../assets/travel-1.png';
import img2 from '../assets/travel-2.png';
import img3 from '../assets/travel-3.png';
import img4 from '../assets/travel-4.png';

const About = () => {
  const travelImages = [img1, img2, img3, img4];

  return (
    <section className="about-section">
      <div className="about-wrapper">
        
        {/* Left Side: The 4-Image Brutalist Grid */}
        <div className="about-grid">
          {travelImages.map((image, index) => (
            <div key={index} className="about-image-box">
              <img src={image} alt={`Umiya Travels Gallery ${index + 1}`} />
              <div className="image-overlay"></div>
            </div>
          ))}
        </div>

        {/* Right Side: Branding & Story */}
        <div className="about-content">
          <span className="about-tag">Since 1998</span>
          <h2 className="about-heading">
            UMIYA <span className="text-orange">TRAVELS</span>
          </h2>
          <div className="about-description-card">
            <p>
              Welcome to <strong>Umiya Travels</strong>, where your global adventures begin. 
              We don't just book tickets; we craft experiences that stay with you forever. 
              From the hidden gems of the East to the luxury skylines of the West, 
              we are your trusted partner in exploration.
            </p>
            <p>
              Our team focuses on <strong>reliability, comfort, and affordability</strong>, 
              ensuring that every mile you travel is a memory worth making.
            </p>
            <div className="about-stats">
              <div className="stat"><strong>25+</strong><span>Years</span></div>
              <div className="stat"><strong>1k+</strong><span>Happy Clients</span></div>
              <div className="stat"><strong>500+</strong><span>Destinations</span></div>
            </div>
            <button className="button-54 book-now">Learn More</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCompass } from 'react-icons/fa';
import '../styles/Explore.css';

// Asset Imports
import d1 from '../assets/destinations/dubai1.jpg';
import d2 from '../assets/destinations/dubai2.jpg';
import d3 from '../assets/destinations/dubai3.jpg';
import u1 from '../assets/destinations/uk1.jpg';
import u2 from '../assets/destinations/uk2.jpg';
import u3 from '../assets/destinations/uk3.jpg';
import p1 from '../assets/destinations/paris1.jpg';
import p2 from '../assets/destinations/paris2.jpg';
import p3 from '../assets/destinations/paris3.jpg';
import v1 from '../assets/destinations/vns1.jpg';
import v2 from '../assets/destinations/vns2.jpg';
import v3 from '../assets/destinations/vns3.jpg';

const travelData = [
  {
    id: "01",
    city: "DUBAI",
    chapter: "The Golden Mirage",
    description: "A narrative of vertical ambition. Once a quiet pearl-diving port, it has rewritten its own history to become a global theatre of architectural wonders.",
    images: [d1, d2, d3],
    theme: "#F9F6F0"
  },
  {
    id: "02",
    city: "LONDON",
    chapter: "The Fog & The Flame",
    description: "London is a city of layers. Beneath every modern skyscraper lies a Roman foundation, connected by the silver thread of the Thames.",
    images: [u1, u2, u3],
    theme: "#F0F4F9"
  },
  {
    id: "03",
    city: "PARIS",
    chapter: "Limestone & Light",
    description: "Paris is an invitation to slow down. Its beauty is found in the symmetry of the boulevards and the soft glow of streetlamps reflecting off the Seine.",
    images: [p1, p2, p3],
    theme: "#F9F0F2"
  },
  {
    id: "04",
    city: "VARANASI",
    chapter: "The Eternal Breath",
    description: "Ancient beyond calculation. Varanasi is a sensory immersion into the spiritual heartbeat of India, where the river serves as a gateway to the eternal.",
    images: [v1, v2, v3],
    theme: "#FFF8F0"
  }
];

const Explore = () => {
  return (
    <div className="story-root">
  

      <div className="story-stack">
        {travelData.map((dest) => (
          <section key={dest.id} className="dest-row" style={{ backgroundColor: dest.theme }}>
            <div className="dest-container">
              {/* Row Top: The Text Information */}
              <div className="dest-info">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-group"
                >
                  <span className="chapter-label">CHAPTER {dest.id}</span>
                  <h1 className="city-name">{dest.city}</h1>
                  <h3 className="chapter-title">{dest.chapter}</h3>
                  <p className="description">{dest.description}</p>
                </motion.div>
                
                <div className="meta-decor">
                  <FaCompass className="compass-icon" />
                  <div className="coord-line"></div>
                  <span className="coord-text"><FaMapMarkerAlt /> GLOBAL EXPLORER</span>
                </div>
              </div>

              {/* Row Bottom: The Image Gallery (Horizontal Scroll) */}
              <div className="dest-gallery">
                {dest.images.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    className="gallery-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <img src={img} alt={`${dest.city} view ${idx}`} />
                    <div className="img-overlay"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

   
    </div>
  );
};

export default Explore;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaChevronUp } from 'react-icons/fa';
import logo from '../assets/logo.png'; 
import '../styles/Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleNav = (path) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path);
  };

  return (
    <footer className="footer-boutique">
      <div className="footer-container">
        <div className="footer-main-grid">
          
          {/* BRAND COLUMN */}
          <div className="footer-col brand-col">
            <div className="f-logo-group" onClick={() => handleNav('/')}>
              {/* This div acts as the logo container */}
              <div className="f-logo-icon">
                <img src={logo} alt="Umiya" />
              </div>
              <span className="f-logo-text">UMIYA TRAVELS</span>
            </div>
            <p className="f-description">
              Luxury heritage and bespoke travel experiences since 1998.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="f-heading">Explore</h4>
            <ul className="f-line-list">
              <li onClick={() => handleNav('/about')}>Our Story</li>
              <li onClick={() => handleNav('/explore')}>Expeditions</li>
              <li onClick={() => handleNav('/destinations')}>Destinations</li>
              <li onClick={() => handleNav('/reviews')}>Reviews</li>
              <li onClick={() => handleNav('/contact')}>Contact Us</li>


            </ul>
          </div>

          <div className="footer-col">
            <h4 className="f-heading">Office</h4>
            <ul className="f-line-list no-hover">
              <li>Ahmedabad, Gujarat</li>
              <li>+91 90163 79828</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="f-copyright">© 2026 UMIYA TRAVELS</span>
          <div className="f-social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
          <button className="f-up-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <FaChevronUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, FaFacebookF, FaTwitter, 
  FaYoutube, FaArrowRight, FaMapMarkerAlt, 
  FaEnvelope, FaPhoneAlt 
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* --- Top Section: Newsletter --- */}
      <div className="footer-newsletter">
        <div className="newsletter-content">
          <h2>GET 20% OFF YOUR <br /> <span className="text-orange">FIRST ADVENTURE</span></h2>
          <div className="newsletter-input-group">
            <input type="email" placeholder="Your email address" />
            <button className="button-54">JOIN THE CLUB <FaArrowRight /></button>
          </div>
        </div>
      </div>

      {/* --- Middle Section: Links & Info --- */}
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            UMIYA <span className="text-orange">TRAVELS</span>
          </Link>
          <p>
            Redefining exploration since 1998. We don't just book trips; 
            we craft memories that last a lifetime across the globe.
          </p>
          <div className="social-links">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h3>QUICK LINKS</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/explore">Explore Tours</Link>
            <Link to="#">Our Gallery</Link>
          </div>

          <div className="footer-col">
            <h3>SUPPORT</h3>
            <Link to="#">Contact Us</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Refund Policy</Link>
          </div>

          <div className="footer-col contact-col">
            <h3>CONTACT</h3>
            <p><FaMapMarkerAlt className="text-orange" /> Ahmedabad, Gujarat, India</p>
            <p><FaPhoneAlt className="text-orange" /> +91 98765 43210</p>
            <p><FaEnvelope className="text-orange" /> hello@umiyatravels.com</p>
          </div>
        </div>
      </div>

      {/* --- Bottom Section: Copyright --- */}
      <div className="footer-bottom">
        <p>&copy; 2026 Umiya Travels. Built for Explorers.</p>
        <div className="bottom-links">
          <span>Sitemap</span>
          <span>Security</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
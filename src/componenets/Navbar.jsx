import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { useNav } from '../context/NavbarContext';
import './Navbar.css';

const Navbar = () => {
  const { isMobileOpen, toggleMobile, menuData } = useNav();
  const navigate = useNavigate(); // Initialize navigate
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handler for Book Now button
  const handleBookClick = () => {
    navigate('/book'); // Navigate to the book page
    if (isMobileOpen) toggleMobile(); // Close mobile menu if open
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* --- Logo --- */}
        <Link to="/" className="logo">Umiya Travels</Link>

        {/* --- Navigation Links --- */}
        <ul className={`nav-links ${isMobileOpen ? 'active' : ''}`}>
          {menuData.map((item, index) => (
            <li key={index} className="nav-item">
              <div className="link-wrapper">
                <Link 
                  to={item.path} 
                  className="main-link" 
                  onClick={() => !item.children && isMobileOpen && toggleMobile()}
                >
                  {item.title}
                </Link>
                {item.children && <FaChevronDown className="arrow-icon" />}
              </div>

              {/* Sub-Menu */}
              {item.children && (
                <div className="dropdown-container">
                  {item.children.map((child, cIdx) => (
                    <Link 
                      key={cIdx} 
                      to={child.path} 
                      className="dropdown-link"
                      onClick={() => isMobileOpen && toggleMobile()}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* --- Right Section --- */}
        <div className="nav-right">
          <div className="action-row">
            <Link to="/login" className="login-btn" onClick={() => isMobileOpen && toggleMobile()}>
              <FaUserCircle className="btn-icon" /> <span>Login</span>
            </Link>
            
            {/* Connected Book Now Button */}
            <button className="book-btn" onClick={handleBookClick}>
              Book Now
            </button>
          </div>

          {/* Animated Hamburger (Mobile Only) */}
          <div className={`burger-menu ${isMobileOpen ? 'open' : ''}`} onClick={toggleMobile}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
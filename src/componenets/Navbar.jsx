// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUserCircle, FaPaperPlane, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
// import { useNav } from '../context/NavbarContext';
// import logo from '../assets/logo.png';
// import '../styles/Navbar.css';

// const Navbar = () => {
//   const { isMobileOpen, toggleMobile, menuData, user, logout } = useNav();
//   const navigate = useNavigate();
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const closeAndNavigate = (path) => {
//     navigate(path);
//     if (isMobileOpen) toggleMobile();
//   };

//   return (
//     <nav className={`navbar-clean ${scrolled ? 'scrolled' : ''}`}>
//       <div className="nav-container">
        
//         {/* BRANDING */}
//         <Link to="/" className="logo-section" onClick={() => isMobileOpen && toggleMobile()}>
//           <img src={logo} alt="Umiya Travels" className="nav-logo-img" />
//           <span className="logo-text-desktop">UMIYA TRAVELS</span>
//         </Link>

//         {/* DESKTOP NAV */}
//         <ul className="nav-links-desktop">
//           {menuData.map((item, index) => (
//             <li key={index}><Link to={item.path}>{item.title}</Link></li>
//           ))}
//         </ul>

//         {/* DESKTOP ACTIONS */}
//         <div className="actions-desktop">
//           {user ? (
//             <div className="nav-user-profile" style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
//               <span className="user-greet" style={{fontSize: '0.7rem', fontWeight: '800'}}>HI, {user.name.split(' ')[0]}</span>
//               <button className="btn-logout-brutal" onClick={logout} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
//                 <FaSignOutAlt />
//               </button>
//             </div>
//           ) : (
//             <button className="btn-login-outline" onClick={() => navigate('/login')}>
//               <FaUserCircle /> LOGIN
//             </button>
//           )}
//           <button className="btn-book-solid" onClick={() => navigate('/book')}>
//             BOOK NOW
//           </button>
//         </div>

//         {/* MOBILE TRIGGER */}
//         <button className="burger-trigger" onClick={toggleMobile}>
//           {isMobileOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* REFINED STAIRCASE DRAWER */}
//         <div className={`mobile-drawer ${isMobileOpen ? 'active' : ''}`}>
//           <ul className="drawer-links">
//             {menuData.map((item, index) => (
//               <li key={index}>
//                 <Link to={item.path} onClick={toggleMobile}>{item.title}</Link>
//               </li>
//             ))}
//           </ul>

//           <div className="drawer-actions">
//             {!user ? (
//               <button className="m-login-btn" onClick={() => closeAndNavigate('/login')}>
//                 <FaUserCircle /> ACCOUNT
//               </button>
//             ) : (
//               <button className="m-logout-btn" onClick={logout} style={{borderColor: '#ff4d4d', color: '#ff4d4d'}}>
//                 LOGOUT <FaSignOutAlt />
//               </button>
//             )}
//             <button className="m-book-btn" onClick={() => closeAndNavigate('/book')}>
//               BOOKING <FaPaperPlane />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaPaperPlane, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { useNav } from '../context/NavbarContext';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const { isMobileOpen, toggleMobile, menuData, user, logout } = useNav();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Centralized navigation handler for Navbar
  const handleNav = (path) => {
    window.scrollTo(0, 0); // Force top
    navigate(path);
    if (isMobileOpen) toggleMobile();
  };

  return (
    <nav className={`navbar-clean ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        
        <Link to="/" className="logo-section" onClick={(e) => { e.preventDefault(); handleNav('/'); }}>
          <img src={logo} alt="Umiya Travels" className="nav-logo-img" />
          <span className="logo-text-desktop">UMIYA TRAVELS</span>
        </Link>

        <ul className="nav-links-desktop">
          {menuData.map((item, index) => (
            <li key={index}>
              <Link to={item.path} onClick={(e) => { e.preventDefault(); handleNav(item.path); }}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="actions-desktop">
          {user ? (
            <div className="nav-user-profile" style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
              <span className="user-greet" style={{fontSize: '0.7rem', fontWeight: '800'}}>HI, {user.name.split(' ')[0]}</span>
              <button className="btn-logout-brutal" onClick={logout} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                <FaSignOutAlt />
              </button>
            </div>
          ) : (
            <button className="btn-login-outline" onClick={() => handleNav('/login')}>
              <FaUserCircle /> LOGIN
            </button>
          )}
          <button className="btn-book-solid" onClick={() => handleNav('/book')}>
            BOOK NOW
          </button>
        </div>

        <button className="burger-trigger" onClick={toggleMobile}>
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`mobile-drawer ${isMobileOpen ? 'active' : ''}`}>
          <ul className="drawer-links">
            {menuData.map((item, index) => (
              <li key={index}>
                <Link to={item.path} onClick={(e) => { e.preventDefault(); handleNav(item.path); }}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="drawer-actions">
            {!user ? (
              <button className="m-login-btn" onClick={() => handleNav('/login')}>
                <FaUserCircle /> ACCOUNT
              </button>
            ) : (
              <button className="m-logout-btn" onClick={logout}>LOGOUT <FaSignOutAlt /></button>
            )}
            <button className="m-book-btn" onClick={() => handleNav('/book')}>
              BOOKING <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { createContext, useState, useContext, useEffect } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [user, setUser] = useState(null); // Tracks logged-in user

  // Check login status on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('user_record');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  const closeMobile = () => setIsMobileOpen(false);

  const openAuth = (mode) => {
    setAuthMode(mode);
    closeMobile();
  };

  // --- LOGOUT LOGIC ---
  const logout = () => {
    localStorage.removeItem('user_record'); // Clear data
    setUser(null); // Reset state
    closeMobile();
    window.location.href = "/"; // Redirect to home
  };

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'unset';
  }, [isMobileOpen]);

  const menuData = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Explore', path: '/explore' },
    { title: 'Destinations', path: '/destinations' },
    { title: 'Reviews', path: '/reviews' }, 
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <NavContext.Provider value={{ 
      isMobileOpen, toggleMobile, closeMobile, menuData, 
      authMode, setAuthMode, openAuth,
      user, setUser, logout // Exporting user and logout
    }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
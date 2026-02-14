import React, { createContext, useState, useContext } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState([]); 

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  
  const addToWishlist = (item) => {
    if (!wishlist.find(i => i.id === item.id)) {
      setWishlist([...wishlist, item]);
    }
  };

  const menuData = [
    { title: 'Home', path: '/' }, // Changed to root to match App.jsx
    { title: 'About', path: '/about' },
    { title: 'Explore', path: '/explore' },
    { 
      title: 'Destinations', 
      path: '/destinations',
      children: [
        { title: 'Spiritual Tours', path: '/tours/spiritual' },
        { title: 'Adventure Picks', path: '/tours/adventure' },
        { title: 'Heritage Sites', path: '/tours/heritage' }
      ]
    },
    { title: 'Reviews', path: '/Reviews' }, // Matched App.jsx casing
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <NavContext.Provider value={{ 
      isMobileOpen, toggleMobile, menuData, 
      searchQuery, setSearchQuery, 
      wishlist, setWishlist, addToWishlist 
    }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (destination) => {
    setCart((prev) => [...prev, destination]);
    alert(`${destination.title} added to your journey!`);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <BookingContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
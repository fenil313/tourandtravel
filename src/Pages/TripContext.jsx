import React, { createContext, useContext, useState } from 'react';

const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [selectedTrips, setSelectedTrips] = useState([]);

  const destinations = [
    { id: 1, title: "Swiss Alps", price: 1200, category: "Nature", desc: "Snowy peaks and luxury skiing." },
    { id: 2, title: "Bali Temple", price: 800, category: "Religious", desc: "Spiritual retreat in the tropics." },
    { id: 3, title: "Sahara Trek", price: 950, category: "Adventure", desc: "Golden dunes and starry nights." },
  ];

  const addToTrip = (trip) => setSelectedTrips([...selectedTrips, trip]);
  const removeFromTrip = (id) => setSelectedTrips(selectedTrips.filter(t => t.id !== id));

  return (
    <TripContext.Provider value={{ destinations, selectedTrips, addToTrip, removeFromTrip }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => useContext(TripContext);
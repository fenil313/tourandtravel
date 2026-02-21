import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currency, setCurrency] = useState({ code: 'INR', symbol: '₹', rate: 1 });

  return (
    <UserContext.Provider value={{ currency, setCurrency }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
import React, { createContext, useState, useContext, useEffect } from 'react';

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  // Initialize from localStorage with error handling
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('umiya_reviews');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse reviews:", error);
      return [];
    }
  });

  // Save to localStorage whenever reviews change
  useEffect(() => {
    localStorage.setItem('umiya_reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Add a new review to the top of the list
  const addReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  // NEW: Delete a review by ID
  const deleteReview = (id) => {
    setReviews((prev) => prev.filter(review => review.id !== id));
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview, deleteReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviews = () => useContext(ReviewContext);
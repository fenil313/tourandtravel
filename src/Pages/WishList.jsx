import React from 'react';
import { useNav } from '../context/NavbarContext';

const Wishlist = () => {
  const { wishlist, setWishlist } = useNav();

  const removeItem = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="page-container mt-5">
      <h2 className="fire-header">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is currently empty. Start exploring!</p>
      ) : (
        <div className="tour-grid">
          {wishlist.map(item => (
            <div key={item.id} className="tour-card">
              <h3>{item.title}</h3>
              <button onClick={() => removeItem(item.id)} className="btn btn-sm btn-danger">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
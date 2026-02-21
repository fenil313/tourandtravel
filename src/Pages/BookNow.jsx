import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaTrash, FaChevronLeft, FaShieldAlt, FaPlaneDeparture, FaCreditCard, FaSpinner } from 'react-icons/fa';
import { removeFromCart } from '../store/destinationSlice';
import '../styles/BookNow.css';

const Book = () => {
  const { cartItems } = useSelector((state) => state.destinations);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [guests, setGuests] = useState(1);
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', travelDate: '', address: '' });

  // Calculation Logic: 30,000 + 2,000 = 32,000 style
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0) * guests;
  const taxAmount = Math.round((subtotal / 30000) * 2000); 
  const grandTotal = subtotal + taxAmount;

  const handleFakePayment = () => {
    if (!formData.fullName || cartItems.length === 0) {
      toast.error("Please provide your name and select a destination.");
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      const paymentId = "SK-TRV-" + Math.random().toString(36).substr(2, 6).toUpperCase();
      const bookingData = { ...formData, guests, subtotal, taxAmount, totalAmount: grandTotal, items: cartItems, paymentId };
      
      const history = JSON.parse(localStorage.getItem('userBookings') || '[]');
      localStorage.setItem('userBookings', JSON.stringify([bookingData, ...history]));
      
      setIsProcessing(false);
      toast.success("Payment Verified! Generating your ticket...");
      navigate('/ticket', { state: bookingData });
    }, 2500);
  };

  return (
    <div className="booking-wrapper">
      <div className="booking-content">
        <div className="left-panel">
          <button className="back-link" onClick={() => navigate(-1)}><FaChevronLeft /> Back to Destinations</button>
          <header className="form-header">
            <h1>Confirm Your <span>Journey</span></h1>
            <p>Fill in your details to finalize your travel documents.</p>
          </header>

          <section className="booking-form">
            <div className="input-row">
              <div className="field">
                <label>Full Name</label>
                <input type="text" placeholder="e.g. Rahul Sharma" onChange={e => setFormData({...formData, fullName: e.target.value})} />
              </div>
              <div className="field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98XXX XXXXX" onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
            </div>
            <div className="field">
              <label>Email Address</label>
              <input type="email" placeholder="traveler@example.com" onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="input-row">
              <div className="field">
                <label>Travel Date</label>
                <input type="date" onChange={e => setFormData({...formData, travelDate: e.target.value})} />
              </div>
              <div className="field">
                <label>Travelers</label>
                <div className="guest-pill">
                    <button onClick={() => setGuests(Math.max(1, guests - 1))}>-</button>
                    <span>{guests}</span>
                    <button onClick={() => setGuests(guests + 1)}>+</button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="right-panel">
          <div className="glass-card summary-card">
            <h3>Booking Summary</h3>
            <div className="cart-preview">
              {cartItems.map(item => (
                <div key={item.id} className="preview-item">
                  <img src={item.img || 'https://via.placeholder.com/50'} alt={item.title} />
                  <div className="p-info">
                    <h6>{item.title}</h6>
                    <p>₹{item.price.toLocaleString()} / person</p>
                  </div>
                  <FaTrash className="del" onClick={() => dispatch(removeFromCart(item.id))} />
                </div>
              ))}
            </div>

            <div className="price-breakdown">
              <div className="p-row"><span>Base Fare</span><span>₹{subtotal.toLocaleString()}</span></div>
              <div className="p-row"><span>Taxes & GST</span><span>+ ₹{taxAmount.toLocaleString()}</span></div>
              <div className="p-row grand"><span>Total Amount</span><span>₹{grandTotal.toLocaleString()}</span></div>
            </div>

            <button className={`checkout-btn ${isProcessing ? 'loading' : ''}`} onClick={handleFakePayment} disabled={isProcessing}>
              {isProcessing ? <FaSpinner className="spin" /> : <><FaCreditCard /> Secure Checkout</>}
            </button>
            <span className="ssl-text"><FaShieldAlt /> Secure Sandbox Payment</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Book;
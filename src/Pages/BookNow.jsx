import React, { useState, useMemo } from 'react';
import { useNav } from '../context/NavbarContext';
import { FaUser, FaEnvelope, FaLock, FaUsers, FaMapMarkerAlt, FaTags, FaArrowRight } from 'react-icons/fa';
import './BookNow.css';

const BookNow = () => {
  const { menuData } = useNav();
  const [step, setStep] = useState('form');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    from: '',
    to: '',
    adults: 1,
    children: 0
  });

  // Dynamic Destination Sync from Context
  const registeredDestinations = useMemo(() => {
    const destMenu = menuData.find(item => item.title === 'Destinations');
    return destMenu ? destMenu.children.map(child => child.title) : ["Spiritual Tours", "Adventure Picks"];
  }, [menuData]);

  // Pricing Logic with Group Discount
  const pricing = useMemo(() => {
    const basePrice = 5000; // Base per adult
    const totalPeople = formData.adults + formData.children;
    let subtotal = (formData.adults * basePrice) + (formData.children * (basePrice * 0.6));
    
    let discount = 0;
    if (totalPeople >= 5) {
      discount = subtotal * 0.15; // 15% Group Discount
    }

    return {
      subtotal,
      discount,
      total: subtotal - discount,
      isGroup: totalPeople >= 5
    };
  }, [formData.adults, formData.children]);

  const handleBooking = (e) => {
    e.preventDefault();
    setStep('paying');
    setTimeout(() => setStep('success'), 3000);
  };

  if (step === 'success') {
    return (
      <div className="success-screen">
        <div className="ticket-card animate-pop">
          <div className="ticket-header">UMIYA VOYAGE CONFIRMED</div>
          <div className="ticket-body">
            <h3>{formData.fullName}</h3>
            <p>{formData.from} ➔ {formData.to}</p>
            <div className="divider"></div>
            <p>Passengers: {formData.adults + formData.children}</p>
            <h2>Total Paid: ₹{pricing.total}</h2>
          </div>
          <button className="brutal-btn" onClick={() => window.location.href='/'}>FINISH</button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="booking-container">
        {/* --- LEFT: REGISTRATION FORM --- */}
        <form className="booking-form" onSubmit={handleBooking}>
          <section className="form-section">
            <h2 className="section-title"><FaUser /> IDENTITY</h2>
            <div className="input-row">
              <input type="text" placeholder="Full Name" required className="brutal-input" 
                onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
              <input type="email" placeholder="Email Address" required className="brutal-input" 
                onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <input type="password" placeholder="Create Booking Password" required className="brutal-input" 
              onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </section>

          <section className="form-section">
            <h2 className="section-title"><FaMapMarkerAlt /> ROUTE</h2>
            <div className="input-row">
              <input type="text" placeholder="From (City)" required className="brutal-input" 
                onChange={(e) => setFormData({...formData, from: e.target.value})} />
              <select className="brutal-input" required onChange={(e) => setFormData({...formData, to: e.target.value})}>
                <option value="">Select Destination</option>
                {registeredDestinations.map(dest => <option key={dest} value={dest}>{dest}</option>)}
              </select>
            </div>
          </section>

          <section className="form-section">
            <h2 className="section-title"><FaUsers /> MANIFESTO (How many people?)</h2>
            <div className="counter-row">
              <div className="counter-box">
                <label>Adults</label>
                <input type="number" min="1" value={formData.adults} 
                  onChange={(e) => setFormData({...formData, adults: parseInt(e.target.value)})}/>
              </div>
              <div className="counter-box">
                <label>Children</label>
                <input type="number" min="0" value={formData.children} 
                  onChange={(e) => setFormData({...formData, children: parseInt(e.target.value)})}/>
              </div>
            </div>
          </section>

          <button type="submit" className="razorpay-trigger">
            {step === 'paying' ? 'ENCRYPTING...' : `PAY ₹${pricing.total} VIA RAZORPAY`}
          </button>
        </form>

        {/* --- RIGHT: LIVE RECEIPT --- */}
        <div className="live-receipt">
          <div className="receipt-head">
            <h3>FARE SUMMARY</h3>
          </div>
          <div className="receipt-content">
            <div className="receipt-line">
              <span>Subtotal</span>
              <span>₹{pricing.subtotal}</span>
            </div>
            {pricing.isGroup && (
              <div className="receipt-line discount">
                <span>Group Discount (15%)</span>
                <span>-₹{pricing.discount}</span>
              </div>
            )}
            <div className="receipt-total">
              <span>TOTAL</span>
              <span>₹{pricing.total}</span>
            </div>
            {pricing.isGroup && <p className="promo-text"><FaTags /> Group Special Applied!</p>}
          </div>
          <div className="receipt-barcode"></div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
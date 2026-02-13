import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateForm, setPaymentSuccess } from '../redux/contactSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPaypal, FaPaperPlane, FaLock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, isPaid } = useSelector((state) => state.contact);
  
  const [isProcessing, setIsProcessing] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    dispatch(updateForm({ [e.target.name]: e.target.value }));
  };

  // Simulated PayPal Payment Logic
  const handlePaypalPayment = () => {
    if (!formData.name || !formData.email) {
      toast.error("Please fill contact details first!");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulating PayPal API delay
    setTimeout(() => {
      dispatch(setPaymentSuccess());
      setIsProcessing(false);
    }, 2000);
  };

  // UseEffect to trigger Toastify after Payment success
  useEffect(() => {
    if (isPaid) {
      toast.success("Payment Received! Umiya Travels is on the way.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      
      // Navigate to home after delay
      setTimeout(() => navigate('/'), 4000);
    }
  }, [isPaid, navigate]);

  return (
    <div className="contact-page">
      <ToastContainer />
      
      <div className="brutal-contact-card">
        <div className="contact-header">
          <h1 className="brutal-title">GET IN <span className="orange-text">TOUCH</span></h1>
          <p>Book your premium consultation via PayPal below.</p>
        </div>

        <div className="contact-grid">
          {/* Form Section */}
          <div className="form-section">
            <div className="input-group">
              <label>FULL NAME</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Ex: Rajesh Mehta" 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>EMAIL ADDRESS</label>
              <input 
                type="email" 
                name="email" 
                placeholder="rajesh@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>MESSAGE</label>
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Tell us about your dream trip..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Payment Section */}
          <div className="payment-section">
            <div className="paypal-demo-box">
              <div className="paypal-header">
                <FaPaypal className="paypal-logo" />
                <span>Express Checkout</span>
              </div>
              
              <div className="payment-details">
                <div className="price-row">
                  <span>Consultation Fee</span>
                  <span>$49.00</span>
                </div>
                <div className="price-row total">
                  <span>Total Due</span>
                  <span>$49.00</span>
                </div>
              </div>

              <button 
                className={`paypal-btn ${isPaid ? 'paid' : ''}`}
                onClick={handlePaypalPayment}
                disabled={isProcessing || isPaid}
              >
                {isProcessing ? "CONNECTING..." : isPaid ? "PAYMENT SUCCESSFUL" : "PAY WITH PAYPAL"}
              </button>
              
              <p className="security-text">
                <FaLock /> Secured by PayPal Encrypted Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
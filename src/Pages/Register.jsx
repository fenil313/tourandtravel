import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import '../styles/Login.css';
import loginImage from '../assets/destinations/bali.jpg';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill all fields to enroll.");
      return;
    }

    // Store user data as a 'database' record
    localStorage.setItem('user_record', JSON.stringify(formData));
    
    toast.success("Registration Successful! Please login.");
    
    // Redirect to login page after 1.5 seconds
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div className="login-overlay">
      <div className="login-modal-card">
        <button className="modal-close-btn" onClick={() => navigate('/')}><FaTimes /></button>
        <div className="login-split-container">
          <div className="login-visual-panel">
            <img src={loginImage} alt="Register" />
          </div>
          <div className="login-form-panel">
            <h2 className="login-title">Register <span>The Archive</span></h2>
            <form className="login-minimal-form" onSubmit={handleRegister}>
              <input type="text" placeholder="Full Name" className="newsletter-input-row"
                onChange={(e) => setFormData({...formData, name: e.target.value})} />
              
              <input type="email" placeholder="Email Address" className="newsletter-input-row"
                onChange={(e) => setFormData({...formData, email: e.target.value})} />
              
              <input type="password" placeholder="Security Key" className="newsletter-input-row"
                onChange={(e) => setFormData({...formData, password: e.target.value})} />
              
              <button type="submit" className="join-btn-action">CREATE ACCOUNT</button>
              <div className="form-footer-links">
                <p>Already a member? <Link to="/login" className="text-link">Login Here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
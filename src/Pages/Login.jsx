import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNav } from '../context/NavbarContext'; // To update global user state
import '../styles/Login.css';
import loginImage from '../assets/destinations/bali.jpg';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { setUser } = useNav(); // Get the setter from context
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Get the registered user record
    const storedUser = JSON.parse(localStorage.getItem('user_record'));

    if (!storedUser) {
      toast.error("No account found. Please register first.");
      return;
    }

    // Check credentials
    if (credentials.email === storedUser.email && credentials.password === storedUser.password) {
      // 1. Set Active Session in LocalStorage
      localStorage.setItem('user_active_session', JSON.stringify(storedUser));
      
      // 2. Update Global Context State (Navbar will react to this)
      setUser(storedUser);
      
      toast.success(`Welcome back, ${storedUser.name}!`);
      setTimeout(() => navigate('/'), 1500);
    } else {
      toast.error("Invalid Email or Password.");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal-card">
        <button className="modal-close-btn" onClick={() => navigate('/')}><FaTimes /></button>
        <div className="login-split-container">
          <div className="login-visual-panel">
            <img src={loginImage} alt="Login" />
          </div>
          <div className="login-form-panel">
            <h2 className="login-title">Member <span>Access</span></h2>
            <form className="login-minimal-form" onSubmit={handleLogin}>
              <input type="email" placeholder="Email Address" className="newsletter-input-row"
                onChange={(e) => setCredentials({...credentials, email: e.target.value})} />
              
              <input type="password" placeholder="Security Key" className="newsletter-input-row"
                onChange={(e) => setCredentials({...credentials, password: e.target.value})} />
              
              <button type="submit" className="join-btn-action">LOGIN</button>
              <div className="form-footer-links">
                <p>New here? <Link to="/register" className="text-link">Register Now</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
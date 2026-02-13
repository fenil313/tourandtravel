import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser({ name: "Umiya Traveler", email });
    navigate('/');
  };

  return (
    <div className="brutal-login-page">
      <div className="login-box-gravity">
        <span className="ink-badge">SECURE ACCESS</span>
        <h2>MEMBER <span className="orange-text">LOGIN</span></h2>
        <form onSubmit={handleLogin}>
          <div className="brutal-input">
            <label>TRAVELER ID</label>
            <input type="email" placeholder="email@example.com" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="brutal-input">
            <label>ACCESS KEY</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="login-submit-btn">AUTHENTICATE</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
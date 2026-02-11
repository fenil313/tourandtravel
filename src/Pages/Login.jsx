import React from 'react';
import { useNavbar } from '../NavbarContext';

const Login = () => {
  const { toggleLogin, isLoggedIn } = useNavbar();

  return (
    <div style={{ padding: '150px', textAlign: 'center' }}>
      <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>
      <button onClick={toggleLogin} className="btn-booking">
        {isLoggedIn ? "Click to Logout" : "Click to Login"}
      </button>
    </div>
  );
};

export default Login;
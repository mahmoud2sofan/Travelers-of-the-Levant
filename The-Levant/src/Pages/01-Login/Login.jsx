import React from 'react';
import LoginForm from '../../Components/Login/LoginForm.jsx';
import Welcome from '../../Components/Welcome/Welcome.jsx';
import './Login.css';

function Login() {
  return (
    <div className="app-container">
      <div className="main-content">
        <div className="login-container">
          <Welcome />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;

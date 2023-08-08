import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './formStyles.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      setLoginSuccess(true);
      navigate('/dashboard'); // Redirect to the dashboard page
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-form-container">
      {loginSuccess ? (
        <p>Login successful! Welcome to your account.</p>
      ) : (
        <form onSubmit={handleLogin}>
          <h2 className="login-form-title">Login</h2>
          <div className="form-field">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-form-button" type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;

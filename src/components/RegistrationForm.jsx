import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './formStyles.css';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      // Create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      setRegistrationSuccess(true);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="registration-form-container">
      {registrationSuccess ? (
        <p>Registration successful! You can now log in.</p>
      ) : (
        <form onSubmit={handleRegistration}>
          <h2 className="registration-form-title">Register</h2>
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
          <button className="registration-form-button" type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;

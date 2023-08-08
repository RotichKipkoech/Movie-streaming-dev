import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './navStyles.css'; 

const Navigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();

    try {
      // Sign out the user
      await signOut(auth);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <nav>
      <ul>
        {!user ? (
          // If the user is not logged in, show the login and register links
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          // If the user is logged in, show the dashboard and logout links
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

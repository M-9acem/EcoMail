import React, { useState } from 'react';
import userPhoto from '../../assets/img/userPhoto.png';
import Options from '../../pages/Options/index.jsx'; // Import the Options component
import './Popup.css';

const Popup = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Set the login state to true when login is clicked
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        // Render the Options component after login
        <Options />
      ) : (
        // Render the login page initially
        <header className="App-header">
          <div className="User-photo-container">
            <img src={userPhoto} className="User-photo" alt="User" />
          </div>
          <h1 className="User-name">User's Name</h1>
          <button className="Login-button" onClick={handleLogin}>
            Log In
          </button>
        </header>
      )}
    </div>
  );
};

export default Popup;

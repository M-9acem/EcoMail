import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <div className="user-info">
        <img 
          src="https://via.placeholder.com/100" 
          alt="User" 
          className="user-photo"
        />
        <h2 className="user-name">User Name</h2>
      </div>
      <button className="login-button">Log In</button>
    </div>
  );
}

export default App;

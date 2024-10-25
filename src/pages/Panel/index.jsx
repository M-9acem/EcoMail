// src/pages/panel/index.jsx
import React, { useState } from 'react';
import Profile from '../profile'; // Import the Profile component
import './index.css';

export default function Panel() {
    const [showProfile, setShowProfile] = useState(false); // State to toggle view

    const handleContinue = () => {
        setShowProfile(true); // Switch to the Profile component on continue click
    };

    if (showProfile) {
        return <Profile />; // Render Profile component if showProfile is true
    }

    return (
        <div className="panel-container">
            <h1 className="panel-heading">Thank You!</h1>
            <p className="panel-message">
                Thank you for your contribution to reducing environmental impact through your actions.
            </p>
            <button className="continue-button" onClick={handleContinue}>Continue</button>
        </div>
    );
}

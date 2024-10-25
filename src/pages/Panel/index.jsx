import React from 'react';
import './index.css'; // Create a new CSS file for specific styles if not already created

export default function Panel() {
    const handleContinue = () => {
        // Define any action for the "Continue" button click
        alert("Continue button clicked!"); // Example action
    };

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

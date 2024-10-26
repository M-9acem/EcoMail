import React from 'react';
import './index.css';
import profilePic from '../../assets/img/user.png'; // Replace with the actual path to the profile picture
import starIcon from '../../assets/img/star.png'; // Replace with the actual path to the star icon

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-info">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                    <h2 className="user-name">Obito</h2> {/* Replace "User Name" with dynamic name if available */}
                </div>
                <div className="profile-stats">
                    <img src={starIcon} alt="Star" className="star-icon" />
                    <span className="star-count">0</span>
                </div>
            </div>
            
            {/* Email section */}
            <p className="user-email">kacemsoulaymane@gmail.com</p>

            {/* Add Account button */}
            <button className="add-account-button">+ Add Account</button>

            {/* Encouraging message */}
            <p className="encouraging-message">Take your first steps into making impactful change!</p>
            
            <p className="profile-message">Tip: Click on your profile to see ur stats and rewards ;) </p>
        </div>
    );
}

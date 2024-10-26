import React from 'react';
import './index.css';
import profilePic from '../../assets/img/user.png'; // Replace with actual path to the profile picture
import starIcon from '../../assets/img/star.png'; // Replace with actual path to the star icon

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
            <p className="profile-message">This is the profile page where you can manage your information.</p>
        </div>
    );
}

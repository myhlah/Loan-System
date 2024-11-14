import React from 'react';
import { Link } from 'react-router-dom'; // Add this line

const BorrowerHeader = () => {
  return (
    <header className="headdash">
        <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logol"/>
        <h2 className="dashh2">MSU-IIT National Multi-Purpose Cooperative</h2>
        <nav className="iconn">
            <Link to="/">
                <img src="Home.png" alt="MSU-IIT NMPC Logo" className="navicon1"/>
            </Link>
            <Link to="/notif">
                <img src="Bell_pin.png" alt="MSU-IIT NMPC Logo" className="navicon"/>
            </Link>
            <Link to="/borrowerdash">
                <img src="User_circle.png" alt="MSU-IIT NMPC Logo" className="navicon"/>
            </Link>
            
        </nav>
        <span></span>
    </header>
  );
};

export default BorrowerHeader;

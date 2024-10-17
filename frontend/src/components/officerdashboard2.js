import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Stats from './Stats';
import Graphs from './Graphs';
import TransactionsTable from './TransactionsTable';
import './officerdashboard.css';

const Dashboard2 = () => {
  const [loggedIn, setLoggedIn] = useState(true); // Define the loggedIn state
  const navigate = useNavigate(); // For navigation after logout
  const handleLogout = () => {
    // Remove token and other user info from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    setLoggedIn(false); // Update loggedIn state to false
    navigate('/login'); // Redirect to home page after logout
};
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="offdashboard">
      <header className="header">
          <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logol"/>
          <h2 className="landingh2off2">MSU-IIT National Multi-Purpose Cooperative</h2>
      </header>

      <div className="sidebar">
          <div className="profile">
              <img src="prof.png" alt="Profile" className="profile-pic"/>
              <div className="profile-info">
                  <h3 className="username">Nicholas Patrick</h3>
                  <div className="username-divider"></div>
                  <p className="role">Loan Clerk</p>
              </div>
          </div>
          <nav className="nav-menu">
              <Link to="/officerdashboard1">Dashboard</Link>
              <Link to="/OfficerDashboard2">Loan Applications</Link>
              <Link to="/OfficerDashboard3">Borrower List</Link>
              <Link to="/payment">Payment</Link>
              <Link to="/Officerprof">Profile</Link>
          </nav>

          <div className="Logoff" onClick={handleLogout}>
              <img src="Sign_out_squre.png" alt="Logout" className="outpicoff" />
              <div className="logoutcontoff">
                  <Link to="/login" className="logoutoff">Logout</Link>
              </div>
          </div>
      </div>
      <div className="containeroff">
        <div className="pending-table">
          <div className="pending-header">
              <span>Pending Loan Application</span>
              <div className="search-bar">
                <input 
                  type="text"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div> 
            <table>
              <thead>
                <tr>
                  <th>Applicant Name</th>
                  <th>Loan Amount</th>
                  <th>Loan Type</th>
                  <th>Tenure</th>
                  <th>Date Applied</th>
                  <th>Step/process</th>
                  <th>Status</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>5000</td>
                    <td>Personal</td>
                    <td>12 months</td>
                    <td>2024-10-06</td>
                    <td>Review</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>7000</td>
                    <td>personal</td>
                    <td>24 months</td>
                    <td>2024-10-07</td>
                    <td>Approved</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>Jean Ampang</td>
                    <td>1000</td>
                    <td>Education</td>
                    <td>24 months</td>
                    <td>2024-10-01</td>
                    <td>Approved</td>
                    <td>Completed</td>
                  </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
};

export default Dashboard2;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';;
import Stats from './Stats';
import Graphs from './Graphs';
import TransactionsTable from './TransactionsTable';
import './officerdashboard.css';

const Dashboard3 = () => {
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
      <header className="headeroff">
          <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logooff"/>
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
              <span>Borrower List</span>
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
                  <th>Active Loan</th>
                  <th>Loan Type</th>
                  <th>Repayment Status</th>
                  <th>Payment Due Date</th>
                  <th>Loan Term</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Cordell Edwards</td>
                    <td>12,000</td>
                    <td>Personal</td>
                    <td>Quarterly</td>
                    <td>2024-10-06</td>
                    <td>3 months</td>
                    <td>Overdue</td>
                    <td><button className="view-button">View more..</button></td>
                  </tr>
                  <tr>
                  <td>Cordell Edwards</td>
                    <td>12,000</td>
                    <td>Personal</td>
                    <td>Quarterly</td>
                    <td>2024-10-06</td>
                    <td>3 months</td>
                    <td>Overdue</td>
                    <td><button className="view-button">View more..</button></td>
                  </tr>
                  <tr>
                  <td>Cordell Edwards</td>
                    <td>12,000</td>
                    <td>Personal</td>
                    <td>Quarterly</td>
                    <td>2024-10-06</td>
                    <td>3 months</td>
                    <td>Overdue</td>
                    <td><button className="view-button">View more..</button></td>
                  </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
};

export default Dashboard3;

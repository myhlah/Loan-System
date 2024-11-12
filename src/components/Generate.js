import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bar, Pie,  Doughnut } from 'react-chartjs-2'; // Import Pie Chart too
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './Generate.css'; 

// Registering chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement 
  );

const ViewMorePage = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
// Handle logout
const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    setLoggedIn(false);
    navigate('/login');
  };

  // Sample chart data
  const loanData = {
    labels: ['Personal', 'Mortgage', 'Auto', 'Education'],
    datasets: [
      {
        label: 'Disbursement by Loan Type',
        data: [120000, 350000, 150000, 80000],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const repaymentPerformanceData = {
    labels: ['On-Time', 'Late', 'Defaulted'],
    datasets: [
      {
        label: 'Repayment Performance',
        data: [75, 15, 10],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderWidth: 1,
      },
    ],
  };
// Borrower Demographics Data
const ageDistributionData = {
    labels: ['18-25', '26-35', '36-50', '50+'],
    datasets: [
      {
        label: 'Age Distribution (%)',
        data: [20, 40, 30, 10], // Example data
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderWidth: 1,
      },
    ],
  };
  const ageChartOptions = {
    responsive: true, // Makes the chart resize on window resize
    maintainAspectRatio: false, // Prevents aspect ratio from being maintained, so we can adjust width/height directly
    plugins: {
      legend: {
        position: 'top', // Adjust legend position
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age Range',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Borrowers',
        },
      },
    },
  };

  const occupationData = {
    labels: ['Teachers', 'Entrepreneurs', 'Engineers'],
    datasets: [
      {
        label: 'Top Occupations (%)',
        data: [30, 40, 30], // Example data for occupations
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
        borderWidth: 1,
      },
    ],
  };
  const occupationChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const loanPurposeData = {
    labels: ['Business', 'Education', 'Personal'],
    datasets: [
      {
        label: 'Loan Purpose Breakdown (%)',
        data: [50, 30, 20], // Example data for loan purposes
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
        borderWidth: 1,
      },
    ],
  };
  const loanPurposeChartOptions = {
    responsive: true, // Makes the chart resize based on its container
    maintainAspectRatio: false, // Prevents maintaining the aspect ratio
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

// overall
// Data for Doughnut Chart (Loan Status)
const loanStatusData = {
    labels: ['Active Loans', 'Closed Loans', 'Defaulted Loans'],
    datasets: [
      {
        data: [400, 100, 10],  // Values based on your example
        backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56'],
      },
    ],
  };
  
  // Data for Horizontal Bar Chart (Applications)
  const applicationData = {
    labels: ['Pending Applications', 'Rejected Applications'],
    datasets: [
      {
        label: 'Applications',
        data: [50, 5],
        backgroundColor: ['#4bc0c0', '#ff9f40'],
      },
    ],
  };
  
  // Common options for charts
  const optionsover = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };  
  return (
    <div className="offdashboard">
      <header className="headeroff">
        <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logooff" />
        <h2 className="landingh2off2">MSU-IIT National Multi-Purpose Cooperative</h2>
      </header>

      <div className="sidebar">
        <div className="profile">
          <img src="prof.png" alt="Profile" className="profile-pic" />
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
          {/*<Link to="/payment">Payment</Link> */}
          <Link to="/Officerprof">Profile</Link>
        </nav>

        <div className="Logoff" onClick={handleLogout}>
          <img src="Sign_out_squre.png" alt="Logout" className="outpicoff" />
          <div className="logoutcontoff">
            <Link to="/login" className="logoutoff">Logout</Link>
          </div>
        </div>
      </div>

      <div className="containerOverview">
        <h1>Loan Management System Overview</h1>
        
        <div className="summary-cards">
            <div className="cardover">
                <hr /><h3>Overall Loan Portfolio Summary</h3><hr />
                <div className="chart-containerover">
                    <div className="chart-itemover">
                    <Doughnut data={loanStatusData} options={optionsover} />
                    </div>
                    <div className="chart-itemover">
                    <Bar data={applicationData} options={{ ...optionsover, indexAxis: 'y' }} />
                    </div>
                </div>
            </div><br/><br/>

            <div className="card">
            <hr /><h3>Loan Disbursement Summary</h3><hr />
            <ul>
                <li>Total Loan Amount Disbursed: ₱1,000,000</li>
                <li>Average Loan Amount: ₱200,000</li>
                <li>Disbursement by Loan Type:</li>
                <Bar data={loanData} />
            </ul>
            </div>
        </div>

        <div className="summary-cards">
            <div className="card">
            <hr /><h3>Repayment Performance</h3><hr />
            <ul>
                <li>Total Collected Payments: ₱800,000</li>
                <li>On-Time Payment Rate: 75%</li>
                <li>Late Payment Rate: 15%</li>
                <li>Default Rate: 10%</li>
                <Bar data={repaymentPerformanceData} />
            </ul>
            </div>  
        </div>

        <div className="summary-cards">
            <div className="card">
            <hr /><h3>Income Analysis</h3> <hr />
            <ul>
                <li>Average Borrower Income: ₱30,000</li>
                <li>Loan-to-Income Ratios: 1.5x</li>
                <li>Income Distribution: Low: 40%, Medium: 40%, High: 20%</li>
            </ul>
            </div>

            <div className="card">
            <hr /><h3>Operational Efficiency</h3> <hr />
            <ul>
                <li>Average Loan Processing Time: 5 days</li>
                <li>Application Approval Rate: 85%</li>
                <li>Loan Officer Performance: 5 loans processed, 5% delinquency rate</li>
            </ul>
            </div>
        </div> 

        <div className="alert-section">
            <hr /><h3>Borrower Demographics</h3> <hr />
            <div className="chart-row">
                <div className="chart-item">
                <br /> <li>Borrower Age Distribution:</li><br />
                    <Bar data={ageDistributionData} options={ageChartOptions} />
                </div><br />
                
                <div className="chart-item">
                <br />  <li>Loan Purpose Breakdown:</li><br />
                    <Pie data={loanPurposeData} options={loanPurposeChartOptions} />
                </div><br />

                <div className="chart-item">
                    <br />  <li>Top Occupations:</li><br />
                    <Bar data={occupationData} options={occupationChartOptions}  />
                </div>
            </div>
                
             
               
            <br/><br/> <br/><br/>
            <br/> <br/><hr /><h3>Risk and Credit Quality Analysis</h3> <hr />
            <table className="data-table">
                <tbody>
                    <tr>
                        <td>Loan-to-Value (LTV) Ratios:</td>
                        <td className="right-align">70%</td>
                    </tr>
                    <tr>
                        <td>Credit Score Distribution - High:</td>
                        <td className="right-align">60%</td>
                    </tr>
                    <tr>
                        <td>Credit Score Distribution - Medium:</td>
                        <td className="right-align">30%</td>
                    </tr>
                    <tr>
                        <td>Credit Score Distribution - Low:</td>
                        <td className="right-align">10%</td>
                    </tr>
                    <tr>
                        <td>Risky Loans:</td>
                        <td className="right-align">20% of total loans</td>
                    </tr>
                </tbody>
            </table>
            <br /><br />

            <hr /><h3>Outstanding Loan Balance</h3> <hr />
            <table className="data-table">
                <tbody>
                    <tr>
                        <td>Total Outstanding Balance:</td>
                        <td className="right-align">₱500,000</td>
                    </tr>
                    <tr>
                        <td>Average Outstanding Balance:</td>
                        <td className="right-align">₱125,000</td>
                    </tr>
                </tbody>
            </table>
            <br /><br />

            <hr /><h3>Alerts and Notifications</h3> <hr />
            <table className="data-table">
                <tbody>
                    <tr>
                        <td>Upcoming Payments Due:</td>
                        <td className="right-align">10 loans</td>
                    </tr>
                    <tr>
                        <td>Delinquent Accounts:</td>
                        <td className="right-align">5 loans (30+ days overdue)</td>
                    </tr>
                    <tr>
                        <td>Accounts Reaching Default:</td>
                        <td className="right-align">3 loans (90+ days overdue)</td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
        </div>

        <div className="financial-summary">
            <hr /><h3>Financial Summary</h3> <hr />
            <table className="data-table">
                <tbody>
                    <tr>
                        <td>Revenue from Interest:</td>
                        <td className="right-align">₱200,000</td>
                    </tr>
                    <tr>
                        <td>Penalty Fees Collected:</td>
                        <td className="right-align">₱5,000</td>
                    </tr>
                    <tr>
                        <td>Provision for Loan Losses:</td>
                        <td className="right-align">₱20,000</td>
                    </tr>
                </tbody>
            </table>
        </div>

      </div>
    </div>
    
  );
};

export default ViewMorePage;

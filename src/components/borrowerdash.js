import React from 'react';
import { Link } from 'react-router-dom';
import './borrowerdash.css'; 
import LoanStatus from './loanstatus';
import TransactionHistory from './transac';
import BorrowerHeader from './borrowerheader';
import Footer from './footer';

const Borrowerdash = () => {

    return (
        <div className="dashboard">
           <BorrowerHeader /> 
            
            <div >
                <div className="cover"> 
                    <img src="cover.png" alt="MSU-IIT NMPC Logo" className="banner"/>
                </div>
              <div className="content">
                <aside>
                    <div className="profile-section">
                        <div className="profile-info">
                            <img src="prof.png" alt="Profile" className="profile-photo" />
                            <button className="edit">Edit Profile</button>
                            <h2 className="name2">Charles Deo</h2>
                            <h4 className="work">Business Owner</h4>
                            
                        </div>
                         
                        <div className="about-info">
                            <h4>About</h4>
                            <p><i className="fas fa-male" style={{ marginRight: '8px' }}></i>
                                <strong>Male</strong>
                            </p><hr />
                            <p><i className="fas fa-birthday-cake" style={{ marginRight: '8px' }}></i>
                                Born June 26, 1980
                            </p><hr />
                            <p><i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i>
                                2nd Floor, Robinsons Mall, Macapagal Ave, Iligan City
                            </p><hr />
                            <p><i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
                                charles5182@ummoh.com
                            </p><hr />
                            <p><i className="fas fa-phone" style={{ marginRight: '8px' }}></i>
                                33757005467
                            </p> <hr />
                        </div>
                    </div>
                </aside>
                    <p className="welcome">Welcome back!</p>
                        <main>
                        <div className="cards-container">
                            {/* Active Loan Card */}
                            <div className="loan-card active-loan">
                                <div className="loan-details">
                                <h3>Active Loan</h3>
                                <p className="current">Loan Amount: ₱5,000</p>
                                <p className="due1">Payment amount: ₱300</p>
                                <p className="due1">Loan Account Number: 4398526514</p>
                                <p className="due">Pay on or before: Oct 15, 2024</p>
                                <p className="term">Remaining Term: 12 months</p>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: '40%' }}></div>
                                </div>
                                </div>
                            </div>

                            {/* Previous Loans Card */}
                            <div className="loan-card previous-loan">
                                <div className="loan-details">
                                <h3>Previous Loans</h3>
                                    <p className="current">Loan Amount: ₱10,000</p>
                                    <p className="due1">Payment amount: ₱300</p>
                                    <p className="due1">Loan Account Number: 4398526514</p>
                                    <p className="due">Repayment Term: 24 months</p>
                                    <p className="term">Status: Fully Repaid</p>
                                </div>
                            </div>
                            </div>

                            <LoanStatus />
                            <TransactionHistory />
                        </main>
                    </div>
                </div>
             <Footer/>
        </div>
    );
};

export default Borrowerdash;

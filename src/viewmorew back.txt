import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ViewMore.css'; 

const ViewMorePage = () => {
  const { borrowerId } = useParams(); // Extract borrowerId from URL
  const [borrower, setBorrower] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBorrowerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/borrowers/${borrowerId}`);
        if (!response.ok) throw new Error('Failed to fetch borrower details');
        const data = await response.json();
        setBorrower(data);
      } catch (error) {
        console.error('Error fetching borrower details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBorrowerDetails();
  }, [borrowerId]);

  if (loading) return <p>Loading...</p>;
  if (!borrower) return <p>Borrower not found</p>;

  return (
    <div className="pdf-container">
      <div className="header">
        <h1>Borrower Information</h1>
        <p>Loan Application and Transaction Summary</p>
      </div>

      <div className="section">
        <h2>Borrower Profile</h2>
        <div className="section-content">
          <p><strong>Full Name:</strong> {borrower.fullName}</p>
          <p><strong>Date of Birth:</strong> {borrower.dob}</p>
          <p><strong>Contact Number:</strong> {borrower.contactNumber}</p>
          <p><strong>Email Address:</strong> {borrower.email}</p>
          <p><strong>Address:</strong> {borrower.address}</p>
          <p><strong>Occupation:</strong> {borrower.occupation}</p>
          <p><strong>Employer:</strong> {borrower.employer}</p>
        </div>
      </div>

      <div className="section">
        <h2>Loan Application Details</h2>
        <div className="section-content">
          <p><strong>Loan ID:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Loan Type:</strong> {borrower.loanDetails.loanType}</p>
          <p><strong>Application Date:</strong> {borrower.loanDetails.applicationDate}</p>
          <p><strong>Loan Status:</strong> {borrower.loanDetails.status}</p>
          <p><strong>Loan Amount Approved:</strong> ${borrower.loanDetails.amount}</p>
          <p><strong>Interest Rate:</strong> {borrower.loanDetails.interestRate}%</p>
          <p><strong>Loan Term:</strong> {borrower.loanDetails.term} months</p>
          <p><strong>Monthly Payment:</strong> ${borrower.loanDetails.monthlyPayment}</p>
        </div>
      </div>

      <div className="section">
        <h2>Repayment History</h2>
        <div className="section-content">
          {borrower.repayments.map((payment, index) => (
            <p key={index}>
              <strong>Date:</strong> {payment.date} - 
              <strong> Amount:</strong> ${payment.amount} - 
              <strong> Status:</strong> {payment.status}
            </p>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Documents</h2>
        <div className="section-content">
          <p><strong>Loan Agreement:</strong> {borrower.documents.loanAgreement}</p>
          <p><strong>Collateral Documents:</strong> {borrower.documents.collateral}</p>
        </div>
      </div>

      <div className="footer">
        <p>Generated on {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ViewMorePage;

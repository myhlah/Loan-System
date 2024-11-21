import React from 'react';
import './ViewMore.css';

const ViewMorePage = () => {
  const borrower = {
    fullName: "John Doe",
    dob: "1990-01-01",
    contactNumber: "123-456-7890",
    email: "johndoe@example.com",
    address: "123 Main Street",
    occupation: "Software Engineer",
    employer: "TechCorp",
    loanDetails: {
      loanId: "L001",
      loanType: "Personal Loan",
      applicationDate: "2023-01-01",
      loanStatus: "Active",
      loanAmount: 5000,
      interestRate: 5,
      loanTerm: 12,
      monthlyPayment: 450,
    },
    repayments: [
      { date: "2023-02-01", amount: 450, status: "Paid" },
      { date: "2023-03-01", amount: 450, status: "Paid" },
    ],
    documents: {
      loanAgreement: "Agreement_001.pdf",
      collateral: "Collateral_001.pdf",
    },
  };

  return (
    <div className="pdf-container">
      <header className="headeroff">
          <img src="logo.png" alt="MSU-IIT NMPC Logo" className="logooff"/>
          <h2 className="landingh2off">MSU-IIT National Multi-Purpose Cooperative</h2>
      </header>
      <div className="headerview">
        <h1>Borrower Information</h1>
        <p>Loan Application and Transaction Summary</p>
      </div>

      <div className="section">
        <h2>Borrower Profile</h2>
        <div className="section-content">
          <p><strong>Member ID:</strong> {borrower.fullName}</p>
          <p><strong>Full Name:</strong> {borrower.fullName}</p>
          <p><strong>Contact Number:</strong> {borrower.contactNumber}</p>
          <p><strong>Email Address:</strong> {borrower.email}</p>
          <p><strong>Permanent Address:</strong> {borrower.email}</p>
          <p><strong>Present Address:</strong> {borrower.email}</p>
          <p><strong>Contact/Telephone Number:</strong> {borrower.contactNumber}</p>
          <p><strong>Sex:</strong> {borrower.contactNumber}</p>
          <p><strong>Age:</strong> {borrower.email}</p>
          <p><strong>Civil Status:</strong> {borrower.dob}</p>
          <p><strong>Name of Spouse:</strong> {borrower.contactNumber}</p>
          <p><strong>Spouse Occupation:</strong> {borrower.email}</p>
          <p><strong>Valid ID/#:</strong> ${borrower.loanDetails.loanAmount}</p>

          <p><strong>Employer:</strong> {borrower.contactNumber}</p>
          <p><strong>Employer Contact Number:</strong> {borrower.email}</p>
          <p><strong>Employement Status/Position Held:</strong> {borrower.email}</p>
          <p><strong>Business Name:</strong> {borrower.email}</p>
          <p><strong>Business Address:</strong> {borrower.contactNumber}</p>
          <p><strong>Length of Coop Membership:</strong> {borrower.contactNumber}</p>
          <p><strong>Account Balance:</strong> {borrower.email}</p>
            <ul>
              <li><p><strong>Share Capital:</strong> {borrower.dob}</p></li>
              <li><p><strong>Savings Deposit:</strong> {borrower.dob}</p></li>
              <li><p><strong>Other Deposit:</strong> {borrower.dob}</p></li>
            </ul>
          <p><strong>Member-Borrower's Signature:</strong> {borrower.contactNumber}</p>
          <p><strong>Spouse's Signature:</strong> {borrower.email}</p>  
        </div>
      </div>

      <div className="section">
        <h2>Cash Flow Statement</h2>
        <div className="section-content">
          <p><strong>Salaries and wages:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Spouse Income:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Income from Business(Net):</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Income from financial investment/dividend:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Other Income:</strong> {borrower.loanDetails.loanType}</p>
            <p><strong>TOTAL INCOME:</strong> {borrower.loanDetails.loanId}</p>
          
          <h5>Expenditure and Cash Outlays</h5>  
          <p><strong>Food Expenses:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>House Rentals:</strong> {borrower.loanDetails.applicationDate}</p>
          <p><strong>Educational: Tuition Fess, Miscellaneous fees, Books & Supplies, etc.:</strong> {borrower.loanDetails.loanStatus}</p>
          <p><strong>Medical and Dental:</strong> ${borrower.loanDetails.loanAmount}</p>
          <p><strong>Clothing:</strong> {borrower.loanDetails.interestRate}%</p>
          <p><strong>Personal Hygiene:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Cooking/Gas:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Transportation:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Water Bill Payment:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Electricity Bill Payment:</strong> ${borrower.loanDetails.loanAmount}</p>
          <p><strong>Telephone/Mobile/Internet Bill Payment:</strong> {borrower.loanDetails.interestRate}%</p>
          <p><strong>Salary of Helper:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>TAxes and Licenses:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Other Expenses:</strong> ${borrower.loanDetails.monthlyPayment}</p>
            <p><strong>TOTAL EXPENDITURES:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          
            <h5>Cash Outlays</h5>  
          <p><strong>Payment of other debts/amortization:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Productive loan from other banks/coop:</strong> {borrower.loanDetails.applicationDate}</p>
          <p><strong>Housing Amortization:</strong> {borrower.loanDetails.loanStatus}</p>
          <p><strong>Vehicle Amortization:</strong> ${borrower.loanDetails.loanAmount}</p>
          <p><strong>Appliances Amortization:</strong> {borrower.loanDetails.interestRate}%</p>
          <p><strong>Others:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Payment of Insurance or Pension Premium:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Other Cash Outlays:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Water Bill Payment:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Electricity Bill Payment:</strong> ${borrower.loanDetails.loanAmount}</p>
          <p><strong>Telephone/Mobile/Internet Bill Payment:</strong> {borrower.loanDetails.interestRate}%</p>
          <p><strong>Salary of Helper:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>TAxes and Licenses:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Other Expenses:</strong> ${borrower.loanDetails.monthlyPayment}</p>
            <p><strong>TOTAL CASH OUTLAYS:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>NET SAVINGS:</strong> ${borrower.loanDetails.monthlyPayment}</p>  
        </div>
      </div>

      <div className="section">
        <h2>Loan Application Details</h2>
        <div className="section-content">
          <p><strong>Loan ID:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Branch Applied:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Date Filed:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>New/Renewal:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Loan Type:</strong> {borrower.loanDetails.loanType}</p>
          <p><strong>Amount Applied:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Term of Loan:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Purpose of Loan:</strong> {borrower.loanDetails.applicationDate}</p>
          <p><strong>Loan Status:</strong> {borrower.loanDetails.loanStatus}</p>
          <p><strong>Loan Amount Approved:</strong> ${borrower.loanDetails.loanAmount}</p>
          <p><strong>Interest Rate:</strong> {borrower.loanDetails.interestRate}%</p>
          <p><strong>Collateral/Security Offered:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Source of Payment:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Mode of Payment:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Manner of Payment:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Loan Application Verified By:</strong> ${borrower.loanDetails.monthlyPayment}</p>
          <p><strong>Verified Date:</strong> ${borrower.loanDetails.monthlyPayment}</p>
        </div>

        <h2>Co-Maker's Statement Details</h2>
        <div className="section-content">
          <p><strong>Member ID:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>From Branch:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Date Signed:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Full Name:</strong> {borrower.fullName}</p>
          <p><strong>Civil Status:</strong> {borrower.dob}</p>
          <p><strong>No. of Dependent/s:</strong> {borrower.dob}</p>
          <p><strong>Sex:</strong> {borrower.contactNumber}</p>
          <p><strong>Age:</strong> {borrower.email}</p>
          <p><strong>Contact/Telephone Number:</strong> {borrower.contactNumber}</p>
          <p><strong>Email Address:</strong> {borrower.email}</p>
          <p><strong>Name of Spouse:</strong> {borrower.email}</p>
          <p><strong>Permanent Address:</strong> {borrower.email}</p>
          <p><strong>Present Address:</strong> {borrower.email}</p>
          <p><strong>Residence Status:</strong> {borrower.email}</p>
          <p><strong>Realtionship to Member-borrower:</strong> ${borrower.loanDetails.loanAmount}</p>
          <p><strong>Known Member-borrower for how amny years?:</strong> ${borrower.loanDetails.loanAmount}</p>
          <p><strong>Co-maker's Signature:</strong> ${borrower.loanDetails.loanAmount}</p>
          <p><strong>Valid ID/#:</strong> ${borrower.loanDetails.loanAmount}</p>

          <p><strong>Employer:</strong> {borrower.contactNumber}</p>
          <p><strong>Employer Contact Number:</strong> {borrower.email}</p>
          <p><strong>Employement Status/Position Held:</strong> {borrower.email}</p>
          <p><strong>Annual Salary:</strong> {borrower.email}</p>
          <p><strong>Length of Service:</strong> {borrower.contactNumber}</p>
          
          <p><strong>Firm/Trade/Business Name:</strong> {borrower.email}</p>
          <p><strong>Business Address:</strong> {borrower.contactNumber}</p>
          <p><strong>Nature of Business:</strong> {borrower.email}</p>
          <p><strong>Sole Owner or Partner:</strong> {borrower.contactNumber}</p>
          <p><strong>Capital Invested:</strong> {borrower.email}</p>

          <h5>Outstanding Obligation/s, if any: (As Proncipal or Co-maker)</h5>  
          <p><strong>Creditor:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Principal Amount:</strong> {borrower.loanDetails.applicationDate}</p>
          <p><strong>Present Balance:</strong> {borrower.loanDetails.loanStatus}</p>
          <p><strong>Maturity Date:</strong> ${borrower.loanDetails.loanAmount}</p>


          <h5>List of Properties(Real and Personal)</h5>  
          <p><strong>Description:</strong> {borrower.loanDetails.loanId}</p>
          <p><strong>Location:</strong> {borrower.loanDetails.applicationDate}</p>
          <p><strong>Area:</strong> {borrower.loanDetails.loanStatus}</p>
          <p><strong>Market Value:</strong> ${borrower.loanDetails.loanAmount}</p>
          <p><strong>Encumbrances:</strong> ${borrower.loanDetails.loanAmount}</p>
        </div>
      </div>

      <div className="section">
        <h2>Repayment History</h2>
        <div className="section-content">
          {borrower.repayments.length > 0 ? (
            borrower.repayments.map((payment, index) => (
              <p key={index}>
                <strong>Date:</strong> {payment.date} - 
                <strong> Amount:</strong> ${payment.amount} - 
                <strong> Status:</strong> {payment.status}
              </p>
            ))
          ) : (
            <p>No repayment history available</p>
          )}
        </div>
      </div>

      <div className="section">
        <h2>Documents</h2>
        <div className="section-content">
          <p><strong>Loan Agreement:</strong> {borrower.documents.loanAgreement}</p>
          <p><strong>Collateral Documents:</strong> {borrower.documents.collateral}</p>
        </div>
      </div>

      <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo1">
                    <h3>MSU-IIT NMPC</h3>
                    <img src="nmpc_logo1.jpg" alt="MSU-IIT NMPC Logo" className="logofooter1"/>
                </div>
                       
                        <ul className="footerUl">
                        <p>CONTACT US</p>
                            <li>Head Office: Gregorio T. Lluch Sr. Ave., Pala-o Iligan City, 9200, Philippines</li>
                            <li>Tel. No.: (063) 223-5874</li>
                            <li>Email: msuiitnmpc@msuiitcoop.org</li>
                            <li className="social-icons">
                                <img src="tw.png" alt="Twitter"/>
                                <img src="fb.png" alt="Facebook"/>
                                <img src="ig.png" alt="Instagram"/>
                            </li>
                        </ul>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2024 MSU-IIT National Multi-Purpose Cooperative. All rights reserved.
                    <a href="#terms">Terms and Condition</a>
                    <a href="#privacy">Privacy Policy</a></p>
            </div>
        </footer>
    </div>
  );
};

export default ViewMorePage;

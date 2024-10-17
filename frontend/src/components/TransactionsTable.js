import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'; 
import './TransactionsTable.css';

const TransactionsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const transactions = [
    { name: 'John Doe', amount: '$5,000', type: 'Personal', tenure: '12 months', date: '2024-10-01', status: 'Approved' },
    // Add more transactions here
  ];
  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter(transaction => 
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.tenure.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.status.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="transactions-table">
     <div className="transactions-header">
        <span>Recent Transactions</span>
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
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.name}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.tenure}</td>
                <td>{transaction.date}</td>
                <td>{transaction.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;

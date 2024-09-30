import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login'; 
import Register from './components/signup'; 
import Landing from './components/landing';
import Officer from './components/officerdash'; 
import Borrower from './components/borrowerdash';
import LoanStatus from './components/loanstatus';
import TransactionHistory from './components/transac';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/signup" element={<Register />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/officerdash" element={<Officer />} /> 
          <Route path="/borrowerdash" element={<Borrower />} />
          <Route path="/loanstatus" element={<LoanStatus />} />
          <Route path="/transac" element={<TransactionHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

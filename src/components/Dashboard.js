// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard! What would you like to do?</p>
      <ul>
        <li>
          <Link to="/ApplyLoan">Apply for a Loan</Link>
        </li>
        <li>
          <Link to="/UpdateUser">update user</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;

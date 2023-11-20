// ApplyLoan.js
import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import PersonalLoan from './PersonalLoan';

const ApplyLoan = () => {
  return (
    <div>
      <h2>Apply for a Loan</h2>
      <ul>
        <li>
          <Link to="/PersonalLoan">Personal Loan</Link>
        </li>
        <li>
          <Link to="/EducationLoan">Education Loan</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default ApplyLoan;

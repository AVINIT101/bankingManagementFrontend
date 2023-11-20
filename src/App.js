import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes, Route as RouteV6 } from 'react-router-dom';

import Login from './components/Login';
import Registration from './components/Registeration';
import Dashboard from './components/Dashboard';

import ApplyLoan from './components/ApplyLoan';
import PersonalLoan from './components/PersonalLoan';
import EducationLoan from './components/EducationLoan';

import UpdateUser from './components/UpdateUser';
import './App.css'; // Import the CSS file


const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: '#05c09b', height: '100vh' }}>
      <h1>Welcome to Banking management system</h1>
      

        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <RouteV6 path="/login" element={<Login />} />
          <RouteV6 path="/registration" element={<Registration />} />
          <RouteV6 path="/dashboard" element={<Dashboard />} />
          <RouteV6 path="/applyLoan" element={<ApplyLoan />} />
          <RouteV6 path="/personalLoan" element={<PersonalLoan/>} />
          <RouteV6 path="/updateUser" element={<UpdateUser/>} />
          <RouteV6 path="/educationLoan" element={<EducationLoan/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;

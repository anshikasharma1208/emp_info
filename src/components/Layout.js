// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';  
import logo from '../assets/logodrdo.png'; 

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="top-strip">
        <div className="logo-container">
          <img src={logo} alt="Lab Logo" className="logo" />
        </div>
        <div className="lab-name">
          <h1>Solid State Physics laboratory </h1>
        </div>
        <div className="logout-container">
          <Link to="/Login" className="logout-button">
            Logout
          </Link>
        </div>
      </div>

      <div className="layout-content">
        <div className="side-menu">
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/DRTC">DRTC Officers</Link></li>
            <li><Link to="/DRDS">DRDS Officers</Link></li>
            <li><Link to="/Alliedofficers">Admin and Allied Officers</Link></li>
            <li><Link to="/Alliedstaff">Admin and Allied Staff</Link></li>
            <li><Link to="/EmployeeData">Employee Data</Link></li>
            <li><Link to="/ExEmployees">Ex-Employees</Link></li>
            <li><Link to="/OrganizationFlow">Organization Flow</Link></li>
          </ul>
        </div>
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

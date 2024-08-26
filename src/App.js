import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home';
import Login from'./components/login';
import DRTC from'./components/DRTC';
import DRDS from './components/DRDS'
import ExEmployees from './components/ExEmployees';
import EmployeeData from './components/EmployeeData'; // Import the component
import Alliedstaff from './components/Alliedstaff';
import Alliedofficers from './components/Alliedofficers';
import OrganizationFlow from './components/OrganizationFlow';
// Inside your routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/drtc" element={<DRTC />} />
        <Route path="/drds" element={<DRDS />} />
        <Route path="/alliedofficers" element={<Alliedofficers/>} />
        <Route path="/alliedstaff" element={<Alliedstaff/>} />
        <Route path="/ExEmployees" element={<ExEmployees />} />
        <Route path="/EmployeeData" element={<EmployeeData/>} />
        <Route path="/OrganizationFlow" element={<OrganizationFlow/>} />
      </Routes>
    </Router>
  );
}

export default App;

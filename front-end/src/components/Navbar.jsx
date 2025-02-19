import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Sales Forecasting Dashboard</h1>
      <ul>
        <li><Link to="/">Dataset Overview</Link></li>
        <li><Link to="/powerbi">Power BI Dashboard</Link></li>
        <li><Link to="/analysis">Data Analysis</Link></li>
        <li><Link to="/dataset">View Dataset</Link></li>
        <li><Link to="/realtime">Real-Time Graphs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
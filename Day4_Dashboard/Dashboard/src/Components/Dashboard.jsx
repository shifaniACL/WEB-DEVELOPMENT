import React from 'react';
import './Dashboard.css'; // Importing CSS for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Navbar Section */}
      <header className="navbar">
        <div className="navbar-title">
          <h1>Dashboard</h1>
          <span>Welcome</span>
        </div>
        <img 
          src="User.png" 
          alt="User Avatar" 
          className="navbar-img" 
        />
      </header>

      {/* Sidebar Section */}
      <div className="sidebar">
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>

      {/* Main Content Section */}
      <main className="main-content">
        <h2>Main Dashboard Content</h2>
        <p>This is where the main content of the dashboard will go.</p>
      </main>
    </div>
  );
};

export default Dashboard;

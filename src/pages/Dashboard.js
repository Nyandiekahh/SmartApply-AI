// src/pages/Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiHome, FiFileText, FiMail, FiPieChart, 
  FiSettings, FiBell, FiSearch, FiMenu
} from 'react-icons/fi';
import '../styles/pages/dashboard.css';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2 className="logo">SmartApply</h2>
          <button 
            className="toggle-btn"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <FiMenu />
          </button>
        </div>

        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-item active">
            <FiHome /> <span>Dashboard</span>
          </Link>
          <Link to="/cv-builder" className="nav-item">
            <FiFileText /> <span>CV Builder</span>
          </Link>
          <Link to="/applications" className="nav-item">
            <FiMail /> <span>Applications</span>
          </Link>
          <Link to="/analytics" className="nav-item">
            <FiPieChart /> <span>Analytics</span>
          </Link>
          <Link to="/settings" className="nav-item">
            <FiSettings /> <span>Settings</span>
          </Link>
        </nav>

        <div className="profile-section">
          <div className="profile-image">EM</div>
          <div className="profile-info">
            <h4>Einstein Mokua</h4>
            <span>Premium Plan</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Navigation */}
        <header className="top-nav">
          <div className="search-bar">
            <FiSearch />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="nav-actions">
            <button className="notification-btn">
              <FiBell />
              <span className="notification-badge">3</span>
            </button>
            <button className="new-cv-btn">
              <span>+ New CV</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Welcome Section */}
          <section className="welcome-section">
            <div className="welcome-text">
              <h1>Welcome back, Einstein! 👋</h1>
              <p>Here's what's happening with your applications</p>
            </div>
            <div className="quick-stats">
              <div className="stat-card">
                <h3>12</h3>
                <p>Active Applications</p>
                <span className="trend positive">+2 this week</span>
              </div>
              <div className="stat-card">
                <h3>89%</h3>
                <p>CV Match Rate</p>
                <span className="trend positive">+5% from last CV</span>
              </div>
              <div className="stat-card">
                <h3>4</h3>
                <p>Interview Invites</p>
                <span className="trend neutral">Same as last week</span>
              </div>
            </div>
          </section>

          {/* Main Grid */}
          <div className="dashboard-grid">
            {/* CV Performance */}
            <div className="dashboard-card lg">
              <div className="card-header">
                <h3>CV Performance</h3>
                <select className="time-filter">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>All time</option>
                </select>
              </div>
              <div className="performance-stats">
                <div className="chart-placeholder">
                  [CV Performance Chart]
                </div>
              </div>
            </div>

            {/* Recent Applications */}
            <div className="dashboard-card">
              <div className="card-header">
                <h3>Recent Applications</h3>
                <Link to="/applications" className="view-all">View All</Link>
              </div>
              <div className="applications-list">
                <div className="application-item">
                  <div className="company-logo">G</div>
                  <div className="application-info">
                    <h4>Software Engineer</h4>
                    <p>Google • Applied 2 days ago</p>
                  </div>
                  <span className="status pending">Pending</span>
                </div>
                <div className="application-item">
                  <div className="company-logo">M</div>
                  <div className="application-info">
                    <h4>Product Designer</h4>
                    <p>Microsoft • Applied 3 days ago</p>
                  </div>
                  <span className="status interview">Interview</span>
                </div>
                <div className="application-item">
                  <div className="company-logo">A</div>
                  <div className="application-info">
                    <h4>Frontend Developer</h4>
                    <p>Apple • Applied 5 days ago</p>
                  </div>
                  <span className="status reviewing">Reviewing</span>
                </div>
              </div>
            </div>

            {/* AI Suggestions */}
            <div className="dashboard-card">
              <div className="card-header">
                <h3>AI Suggestions</h3>
                <button className="refresh-btn">Refresh</button>
              </div>
              <div className="suggestions-list">
                <div className="suggestion-item">
                  <span className="suggestion-icon">💡</span>
                  <p>Add more quantifiable achievements to your CV</p>
                </div>
                <div className="suggestion-item">
                  <span className="suggestion-icon">📈</span>
                  <p>Your application success rate can be improved by 15%</p>
                </div>
                <div className="suggestion-item">
                  <span className="suggestion-icon">🎯</span>
                  <p>3 new jobs match your profile</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="dashboard-card">
              <h3>Quick Actions</h3>
              <div className="actions-grid">
                <button className="action-btn">
                  <span className="action-icon">📝</span>
                  Create CV
                </button>
                <button className="action-btn">
                  <span className="action-icon">✉️</span>
                  New Application
                </button>
                <button className="action-btn">
                  <span className="action-icon">📊</span>
                  View Analytics
                </button>
                <button className="action-btn">
                  <span className="action-icon">⚡</span>
                  AI Assistant
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
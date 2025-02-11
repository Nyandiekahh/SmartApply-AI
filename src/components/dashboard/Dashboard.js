// src/components/dashboard/Dashboard.js
import React, { useState } from 'react';
import { Sidebar, TopNav } from '../layout';
import CVPreview from '../resume/CVPreview';
import AISuggestions from '../ai/AISuggestions';
import QuickActions from './QuickActions';
import '../../styles/components/dashboard.css';

const Dashboard = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarCollapsed(!isSidebarCollapsed);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
      <div className="dashboard-main">
        <TopNav onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />
        <div className="dashboard-content">
          <section className="welcome-section">
            <h1>Welcome back, <span className="user-name">John</span></h1>
            <p className="last-login">Last login: Today at 10:30 AM</p>
          </section>

          <div className="dashboard-grid">
            <QuickActions />
            <AISuggestions />
            <CVPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
// src/components/layout/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/sidebar.css';

const Sidebar = ({ isCollapsed, onToggle }) => {
  const menuItems = [
    { icon: '📄', label: 'CV Builder', path: '/cv-builder' },
    { icon: '✉️', label: 'Applications', path: '/applications' },
    { icon: '🤖', label: 'AI Assistant', path: '/ai-assistant' },
    { icon: '📊', label: 'Analytics', path: '/analytics' },
    { icon: '⚙️', label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">SmartApply</div>
        <button className="collapse-btn" onClick={onToggle}>
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path}
            className="nav-item"
            data-tooltip={isCollapsed ? item.label : ''}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">JD</div>
          <div className="user-details">
            <span className="user-name">John Doe</span>
            <span className="user-plan">Premium</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
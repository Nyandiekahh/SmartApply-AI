// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
import CVBuilder from './pages/CVBuilder';
import EmailSystem from './pages/EmailSystem';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        
        {/* Protected Routes - will add authentication later */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cv-builder" element={<CVBuilder />} />
        <Route path="/email-system" element={<EmailSystem />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
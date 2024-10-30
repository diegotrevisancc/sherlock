import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SocialEngineeringPage from './pages/SocialEngineeringPage';
import DigitalSecurityPage from './pages/DigitalSecurityPage';
import PhishingPage from './pages/PhishingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/learn/social-engineering" element={<SocialEngineeringPage />} />
      <Route path="/learn/digital-security" element={<DigitalSecurityPage />} />
      <Route path="/learn/phishing" element={<PhishingPage />} />
    </Routes>
  );
}

export default App;
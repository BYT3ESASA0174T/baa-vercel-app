import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SkillsPage from './components/SkillsPage';
import AboutPage from './components/AboutPage';
import WIPPage from './components/WIPPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wip" element={<WIPPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
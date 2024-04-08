import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
//import SkillsPage from './SkillsPage';
//import AboutPage from './AboutPage';
import WIPPage from './components/WIPPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wip" element={<WIPPage />} />
    </Routes>
  );
};

export default App;
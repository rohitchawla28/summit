import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import SummaryPage from './components/SummaryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
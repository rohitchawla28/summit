import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const navigateToSummary = () => {
    navigate('/summary');
  };

  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={navigateToSummary}>Summarize!</button>
    </div>
  );
};

export default MainPage;
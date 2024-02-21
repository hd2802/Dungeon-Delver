import { Routes, Route } from 'react-router-dom';

import React from 'react';

import Home from './pages/Home.js';
import TrialCampaign from './pages/TrialCampaign.js';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trial-campaign" element={<TrialCampaign/>} />
    </Routes>
  );
}

export default App;
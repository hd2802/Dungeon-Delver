import './App.css';
import Router from './Router.js';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// TODO: fix nested router issue

const App = () => {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}

export default App;

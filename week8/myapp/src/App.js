import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/confirmation" element={<Page2 />} />
    </Routes>
  </Router>
);

export default App;

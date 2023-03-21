import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

const app = ReactDOM.createRoot(document.getElementById('app'));

app.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/:user" element={<App />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

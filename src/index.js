import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

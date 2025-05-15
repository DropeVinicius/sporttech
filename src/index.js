import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // certifique-se de que está App (sem .js)
import './index.css'; // opcional, se tiver global

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
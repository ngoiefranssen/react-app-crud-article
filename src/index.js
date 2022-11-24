import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

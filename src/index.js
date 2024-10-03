import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes, useSearchParams } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
  </I18nextProvider>
);

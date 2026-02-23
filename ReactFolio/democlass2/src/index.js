import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Notes from './components/Notes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Notes/>
  </>
);


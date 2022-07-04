import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='m-8 flex flex-col justify-center items-center'>
    <h1 className="font-bold text-2xl" >Task Tracker</h1>
    <App />
  </div>
);



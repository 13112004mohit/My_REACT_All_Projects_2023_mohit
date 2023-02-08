import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import {AppProvider} from './context/productcontext';

ReactDOM.render(
  <BrowserRouter>
  <AppProvider>
    <App />
  </AppProvider>
  </BrowserRouter>
  ,document.getElementById('root')
);

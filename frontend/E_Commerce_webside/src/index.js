import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { AppProvider } from './context/productcontext';
import FilterContextProvider from './context/filter_context'

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </AppProvider>
  </BrowserRouter>
  , document.getElementById('root')
);

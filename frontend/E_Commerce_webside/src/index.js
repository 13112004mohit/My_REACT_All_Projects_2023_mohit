import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { AppProvider } from './context/productcontext';
import FilterContextProvider from './context/filter_context'
import CartProvider from './context/cart_context';

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
         <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </BrowserRouter>
  , document.getElementById('root')
);

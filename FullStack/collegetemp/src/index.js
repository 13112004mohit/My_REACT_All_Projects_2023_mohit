import { ColorModeScript,ChakraProvider ,theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import  ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <BrowserRouter>
      <StrictMode>
        <ColorModeScript />
         <ChakraProvider theme={theme}>
           <App />
         </ChakraProvider>
      </StrictMode>
    </BrowserRouter>
);



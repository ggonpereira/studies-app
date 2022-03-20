import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* I only have one page so I rather to not create a routes file */}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

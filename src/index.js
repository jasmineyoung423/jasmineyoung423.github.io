import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import ScrollToTop from './Components/scroll-to-top/ScrollToTop.component'

ReactDOM.render(
  <HashRouter basename='/'>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </HashRouter>,
  document.getElementById('root')
);

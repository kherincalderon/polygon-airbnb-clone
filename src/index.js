import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from 'web3uikit';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={ process.env.REACT_APP_MORALIS_APP_ID } serverUrl={ process.env.REACT_APP_MORALIS_SERVER_URL }>
      <NotificationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

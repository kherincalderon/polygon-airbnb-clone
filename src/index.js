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
    <MoralisProvider appId="CdVdbAfaaFtkMZdpsr2dcOJmrVvLIiqWxvgwsLYX" serverUrl="https://criwaokskw5w.usemoralis.com:2053/server">
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

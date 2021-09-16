import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppProvider} from './context/context.js';
import {Auth0Provider} from "@auth0/auth0-react";
const domain= process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
  domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
  <AppProvider >
      <App />
    </AppProvider>
  </Auth0Provider>
  </React.StrictMode>
 ,
  document.getElementById('root')
);


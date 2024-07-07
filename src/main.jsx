// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

const clientId = import.meta.env.VITE_KINDE_CLIENT_ID;
const domain = import.meta.env.VITE_KINDE_DOMAIN;
const logoutUri = import.meta.env.VITE_LOGOUT_URI;
const redirectUri = import.meta.env.VITE_REDIRECT_URI;

console.log(clientId);
ReactDOM.createRoot(document.getElementById('root')).render(
  <KindeProvider
    clientId={clientId}
    domain={domain}
    logoutUri={logoutUri}
    redirectUri={redirectUri}
  >
    <App />
  </KindeProvider>
);

// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {KindeProvider} from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById('root')).render(

  <KindeProvider
    clientId="5b5597eca74b44d986d309a0a7984111"
    domain="https://student2810.kinde.com"
    logoutUri="http://localhost:5173"
    redirectUri="http://localhost:5173/home"
  >
        <App />
    </KindeProvider>

)

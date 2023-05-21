// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebase/client.tsx';

initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

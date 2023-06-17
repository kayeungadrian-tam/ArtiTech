 
import React from 'react';
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
import router from './router/router.tsx';
import { RouterProvider } from 'react-router-dom';
import App from './App.tsx';

// import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
// import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
// import { getAuth, connectAuthEmulator } from 'firebase/auth'

// import { initializeApp } from "firebase/app";
// import {getApp} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebaseConfig from './firebase/client.tsx';


// initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const isEmulating = window.location.hostname === 'localhost'
// if (isEmulating) {
//   const auth = getAuth()
//   connectAuthEmulator(auth, 'http://localhost:9099')
//   const functions = getFunctions(getApp())
//   connectFunctionsEmulator(functions, 'localhost', 5001)
//   const db = getFirestore()
//   connectFirestoreEmulator(db, 'localhost', 8080)
// }


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

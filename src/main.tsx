 
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
// import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
// import { getAuth, connectAuthEmulator } from 'firebase/auth'

// import { initializeApp } from "firebase/app";
// import {getApp} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebaseConfig from './firebase/client.tsx';

import { Header } from './components/header.tsx';

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

import {auth} from './firebase/client.tsx';
import firebase from 'firebase/app';

import {  signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const clickLogin = function(){
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider)
  // .then(user => {
  //     alert("success : " + user.displayName + "さんでログインしました");
  //   })
  //   .catch(error => {
  //       alert(error.message);
  //   });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header  onLogin={clickLogin}/>
    <App />
  </React.StrictMode>,
)

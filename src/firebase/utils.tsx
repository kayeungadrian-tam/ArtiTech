// import React, { useState } from 'react';
import {auth} from './client.tsx';

import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const clickLogin = function(){


  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then(user => {
    //   alert("success : " + user.user.displayName + "さんでログインしました");
    console.table(user);
    })
    .catch(error => {
        alert(error.message);
    });
}

export default clickLogin;

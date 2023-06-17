// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "primeicons/primeicons.css";

import styles from "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";

import { Header } from "./components/header/header.tsx";
import { Footer } from "./components/footer/footer.tsx";
// import clickLogin from './firebase/utils.tsx';
// import BlogPost from './views/blog.tsx';
import LandingPage from "./views/landing/landingPage.tsx";
import { Spinner } from "./components/spinner/spinner.tsx";
import { AppProvider } from "./providers/app.tsx";
import { AppRoutes } from "./router/index.tsx";

function App() {
  // const [count, setCount] = useState(0)
  // const [user, setUser] = useState(null);

  const loginUser = () => {
    console.log("loginUser");
  };

  const logout = () => {
    console.log("logout");
  };

  const onCreateAccount = () => {
    console.log("onCreateAccount");
  };

  const user = {
    user: {
      displayName: "ArtiTech",
      email: "",
      photoURL: "",
    },
  };

  const footerData = {
    text: "ArtiTech",
    link: "https://www.artitech.com",
    linkText: "ArtiTech",
    icon: "pi pi-google",
  };

  return (
    <>
      <AppProvider>
        {/* <RouterProvider router={router} /> */}
        <AppRoutes />
      </AppProvider>
      {/* 
    <Header 
      user={user}
      onCreateAccount={onCreateAccount}
      onLogin={loginUser} 
    onLogout={logout}/>
     */}
      {/* <LandingPage /> */}

      {/* <Spinner color="black" size="sm"/> */}

      {/* <Footer footerData={footerData}/> */}
    </>
  );
}

export default App;

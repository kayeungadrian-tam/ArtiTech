// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import "primeicons/primeicons.css";

import "./assets/css/index.css";

// import { RouterProvider } from "react-router-dom";
// import router from "./router/router.tsx";

import { Header } from "./components/header/header.tsx";
// import { Footer } from "./components/footer/footer.tsx";
import { AppProvider } from "./providers/app.tsx";
import { AppRoutes } from "./router/index.tsx";
import { Button } from "./components/button/button.tsx";
import { SignUpModal } from "./components/modal/signUp.tsx";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  // const [count, setCount] = useState(0)
  // const [user, setUser] = useState(null);

  // const loginUser = () => {
  //   console.log("loginUser");
  // };

  // const logout = () => {
  //   console.log("logout");
  // };

  // const onCreateAccount = () => {
  //   console.log("onCreateAccount");
  // };

  // const user = {
  //   user: {
  //     displayName: "ArtiTech",
  //     email: "",
  //     photoURL: "",
  //   },
  // };

  // const footerData = {
  //   text: "ArtiTech",
  //   link: "https://www.artitech.com",
  //   linkText: "ArtiTech",
  //   icon: "pi pi-google",
  // };

  const showSignInModal = () => {
    console.log("showSignInModal");
    setShowModal(true);
    const favDialog = document.getElementById("sign-up-dialog");
    favDialog?.showModal();
  };

  return (
    <>
      <body className="dark:bg-black">
        <AppProvider>
          <Header
            onLogin={function (): void {
              throw new Error("Function not implemented.");
            }}
            onLogout={function (): void {
              throw new Error("Function not implemented.");
            }}
            onCreateAccount={showSignInModal}
          />
          {/* <RouterProvider router={router} /> */}
          <AppRoutes />
        </AppProvider>
      </body>

      <dialog id="sign-up-dialog" className="bg-transparent">
        <SignUpModal />
      </dialog>
    </>
  );
}

export default App;

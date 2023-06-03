// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



import { Header } from './components/header.tsx';
// import clickLogin from './firebase/utils.tsx';
// import BlogPost from './views/blog.tsx';
import LandingPage from './views/landingPage.tsx';

function App() {
  // const [count, setCount] = useState(0)
  // const [user, setUser] = useState(null); 

  const loginUser = () => {
    console.log("loginUser");
  }

  const logout = () => {
    console.log("logout");
  }

  const onCreateAccount = () => {
    console.log("onCreateAccount");
  }

  const user = {
    user: {
      displayName: "ArtiTech",
      email: "",
      photoURL: "",
  }}

  return (
    <>

    <Header 
      user={user}
      onCreateAccount={onCreateAccount}
      onLogin={loginUser} 
    onLogout={logout}/>
    
      <LandingPage />


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Vite + React ({import.meta.env.MODE})</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App

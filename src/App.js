import "./styles/App.css"
import { BrowserRouter} from "react-router-dom"
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import React, { useState, useEffect } from "react";
import { AuthContext } from "./context";


function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    if(localStorage.getItem('auth'))
      setIsAuth(true)
    setLoading(false)
  }, [])


  return (
    <AuthContext.Provider value={{
      isAuth,
      isLoading,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
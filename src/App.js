import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './comps/Home'
import { AuthContext, AuthProvider } from './contextApi/AuthContext'
import { useEffect, useState, useContext } from 'react'
import { useCookies } from 'react-cookie'
import Signup from './comps/authPapes/Signup'
import Login from './comps/authPapes/Login'
import Music from './comps/Music'
import Points from './comps/Points'
import Street from './comps/Street'

function App() {

  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [cookies, setCookies] = useCookies();

  const checkUser = async () => {
    try {
      const res = await fetch('http://localhost:8000/checkuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: cookies.jwt })
      })
      const data = await res.json()
      if (data.status === "bad auth") {
        console.log("bad auth user")
        alert("login is required")
        setIsAuth(false)
      } else if (data.status === "good auth") {
        console.log("all good")
        setIsAuth(true)
      }
    } catch (error) {
      console.log("catch")
      setIsAuth(false)
      console.log("error: ", error)
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  console.log(isAuth)
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/music" element={isAuth ? <Music /> :  <Navigate to="/login" />} />
            <Route path="/score" element={isAuth ? <Points /> :  <Navigate to="/login" />} />
            <Route path="/street" element={isAuth ? <Street /> :  <Navigate to="/login" />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  )
}
export default App

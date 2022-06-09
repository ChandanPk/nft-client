import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './comps/Loginn'
import SignUp from './comps/Signupp'
import Home from './comps/Home'
import { AuthProvider } from './contextApi/AuthContext'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/test" element={<Home />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  )
}
export default App
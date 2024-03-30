import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Landing from './pages/Landing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

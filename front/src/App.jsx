import React from 'react'
import NavBar from './components/NavBar'
import {Route, BrowserRouter,Routes } from 'react-router-dom'
import Home from './Home'
import Login from './auth/login'
import Signup from './auth/signup'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App

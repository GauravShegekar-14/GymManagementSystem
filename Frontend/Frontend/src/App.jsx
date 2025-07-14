import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Register from './Pages/auth/Register.jsx'
import Login from './Pages/auth/Login.jsx'
import Home from './Pages/Home.jsx'
// Importing Tailwind CSS styles


function App() {


  return (
   <Routes>
   <Route path="/register" element={<Register />} />
   <Route path="/login" element={<Login />} />
   <Route path="/" element={<Home />} />
   </Routes>  
 
   
  )
}

export default App

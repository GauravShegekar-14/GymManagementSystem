import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Register from './Pages/auth/Register.jsx'
import Login from './Pages/auth/Login.jsx'
import Home from './Pages/Home.jsx'
import Classes from './Pages/Classes/Classes.jsx'
import Trainers from './Pages/Trainers/TrainersHome.jsx'
import Membership from './Pages/Membership/Membership.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Profile from './Members/Profile.jsx'
// Importing Tailwind CSS styles


function App() {


  return (
   <Routes>
   <Route path="/register" element={<Register />} />
   <Route path="/login" element={<Login />} />
   <Route path="/" element={<Home />} />
    <Route path="/classes" element={<Classes />} />
    <Route path="/trainers" element={< Trainers/>} />
    <Route path="/membership" element={<Membership/>} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/profile" element={<Profile />} />
   </Routes>  
 
   
  )
}

export default App

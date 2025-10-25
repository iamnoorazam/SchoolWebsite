import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Classes from './pages/Classes'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Optional — show these on all pages */}
      {/* <Card1 />
      <Card2 />
      <Card3 />
      <Card4 /> */}
    </div>
  )
}

export default App

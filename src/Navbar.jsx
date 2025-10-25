import React from 'react'
import { GraduationCap } from "lucide-react"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  // Highlight active link
  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold'
      : 'px-4 py-2 hover:bg-blue-600 rounded-lg'
  }

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-blue-500 flex justify-between items-center text-white px-10 h-20 shadow-md '>

      {/* Left Section (Logo + Name) */}
      <div className='flex items-center gap-3'>
        <GraduationCap size={36} className="text-white" />  
        <div>
          <h1 className='text-2xl font-bold'>Bright Future School</h1>
          <p className='text-sm'>Excellence in Education</p>
        </div>
      </div>

      {/* Center Navigation Links */}
      <div className='flex gap-6 text-lg'>
        <Link to="/" className={getLinkClass('/')}>Home</Link>
        <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
        <Link to="/classes" className={getLinkClass('/classes')}>Classes</Link>
        <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
      </div>

      {/* Right Section (Login/Register Links) */}
      <div className='flex gap-4'>
        <Link
          to="/login"
          className='px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-medium'
        >
          Login
        </Link>
        <Link
          to="/register"
          className='px-4 py-2 bg-blue-800 hover:bg-blue-900 rounded-lg text-lg font-medium'
        >
          Register
        </Link>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { GraduationCap } from "lucide-react"

const Navbar = () => {
  return (
    <div>
      <div className='h-20 bg-blue-500 flex justify-between items-center text-white px-10'>

        {/* Left Section */}
        <div className='flex items-center gap-3 pl-10'>
          <GraduationCap size={39} className="text-white" />  
          <div>
            <h1 className='text-2xl font-bold'>Bright Future School</h1>
            <p className='text-sm'>Excellent in Education</p>
          </div>
        </div>

        {/* Center Buttons */}
        <div className='flex gap-6 text-xl'>
          <button className='px-4 py-2 hover:bg-blue-600 rounded-lg'>Home</button>
          <button className='px-4 py-2 hover:bg-blue-600 rounded-lg'>About Us</button>
          <button className='px-4 py-2 hover:bg-blue-600 rounded-lg'>Classes</button>
          <button className='px-4 py-2 hover:bg-blue-600 rounded-lg'>Contact</button>
        </div>

        {/* Right Buttons */}
        <div className='flex gap-4'>
          <button className='px-4 py-2 hover:bg-green-600 rounded-lg text-xl'>Login</button>
          <button className='px-4 py-2 hover:bg-blue-900 rounded-lg text-xl'>Register</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar

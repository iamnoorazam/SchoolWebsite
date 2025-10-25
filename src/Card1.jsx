import React from 'react'

const Card1 = () => {
  return (
    <div
      className='h-[650px] flex flex-col items-center justify-center text-center gap-6 px-4 bg-cover bg-center relative'
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1649541436654-7e511dc2bae5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM5fHxzY2hvb2wlMjBidWlsZGluZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600')"
      }}
    >
      

      {/* Overlay for readability */}
      <div className='absolute inset-0  bg-opacity-50'></div>

      {/* Content */}
      <div className='relative z-10 max-w-3xl text-white'>
        <h1 className='text-6xl font-bold text-amber-800'>Welcome to Bright Future Academy</h1>
        <h3 className='text-lg mt-5 text-fuchsia-700'>
          Empowering students to reach their full potential through excellence in education,
          technology, innovation, and development.
        </h3>

        {/* Buttons */}
        <div className='flex gap-10 justify-center pt-10'>
          <button className='px-6 py-3 bg-yellow-400 text-red-600 rounded-lg font-semibold hover:bg-gray-200'>
            Login to Portal
          </button>

          <button className='px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800'>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card1

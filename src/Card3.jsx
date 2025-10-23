import React from 'react'

const Card3 = () => {
  return (
    <div className="bg-blue-800 text-white py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-2xl font-semibold">
        
        <div className="flex flex-col items-center justify-center bg-blue-700 rounded-xl py-6 shadow-md hover:scale-105 transition-transform duration-300">
          <h1>1200+</h1>
          <p className="text-lg font-normal">Students</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-blue-700 rounded-xl py-6 shadow-md hover:scale-105 transition-transform duration-300">
          <h1>85+</h1>
          <p className="text-lg font-normal">Teachers</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-blue-700 rounded-xl py-6 shadow-md hover:scale-105 transition-transform duration-300">
          <h1>98%</h1>
          <p className="text-lg font-normal">Success Rate</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-blue-700 rounded-xl py-6 shadow-md hover:scale-105 transition-transform duration-300">
          <h1>30+</h1>
          <p className="text-lg font-normal">Years Experience</p>
        </div>

      </div>
    </div>
  )
}

export default Card3

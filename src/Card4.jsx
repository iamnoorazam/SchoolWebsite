import React from 'react'

const Card4 = () => {
  return (
    <div className="bg-white text-center py-12 px-5">
      
      <h1 className="text-3xl font-semibold text-gray-800">Ready to Join Our Community?</h1>
      <p className="text-gray-600 mt-3 text-lg">
        Access your personalized portal to stay connected with your school community.
      </p>

      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        <button className="bg-blue-700 text-white py-3 px-6 rounded-xl hover:bg-blue-800 transition duration-300">
          Parent Portal
        </button>

        <button className="bg-green-500 text-white py-3 px-6 rounded-xl hover:bg-green-600 transition duration-300">
          Teacher Portal
        </button>

        <button className="bg-purple-700 text-white py-3 px-6 rounded-xl hover:bg-purple-800 transition duration-300">
          Admin Portal
        </button>
      </div>
    </div>
  )
}

export default Card4

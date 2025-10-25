import React from 'react'

const Classes = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3Nyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1200')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Our Classes</h1>
        <p className="text-lg max-w-xl mx-auto text-green-400">
          We offer classes from Nursery to 12th grade, focusing on holistic development and
          modern learning techniques.
        </p>
      </div>
    </div>
  )
}

export default Classes

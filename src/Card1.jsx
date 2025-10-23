import React from 'react'

const Card1 = () => {
  return (
    <div>
        <div className='h-[650px] bg-cyan-600 flex flex-col items-center justify-center text-center gap-6 px-4'>
             <h1 className='text-3xl font-bold text-white'>Welcome to Bright Future Academy</h1>
            <h3 className='text-lg max-w-xl pt-10'>
                Empowering students to reach their full potential through excellence in education and we move ahead with more technology and innovation, and  development.
            </h3>

  
            <div className='flex gap-10 pt-20'>
                    <button className='px-4 py-2 bg-yellow-400 text-red-600 rounded-lg font-semibold hover:bg-gray-200'>
                            Login to Portal 
                    </button>

                    <button className='px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800'>
                    Get in Touch 
                     </button>
            </div>
        </div>

    </div>
  )
} a

export default Card1




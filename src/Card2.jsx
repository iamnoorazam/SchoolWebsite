import React from 'react'
import { BookOpenText, Users, Award, Braces } from "lucide-react"

const Card2 = () => {
  return (
    <div className="bg-gray-600 text-white py-10 px-5">
      
      <h4 className="text-center text-3xl font-semibold">Why Choose Us</h4>
      <p className="text-center mt-4 text-lg max-w-2xl mx-auto">
        Experience a nurturing environment where every student is valued and supported.
      </p>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        
        
        <div className="bg-green-400 text-center flex flex-col items-center justify-center gap-4 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <BookOpenText size={40} />  
          <h4 className="text-2xl font-bold">Quality Education</h4> 
          <p>Comprehensive curriculum designed to foster academic excellence.</p> 
        </div>

       
        <div className="bg-green-400 text-center flex flex-col items-center justify-center gap-4 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <Users size={40} />  
          <h4 className="text-2xl font-bold">Expert Teachers</h4>  
          <p>Qualified and passionate educators dedicated to student success.</p>
        </div>

        
        <div className="bg-green-400 text-center flex flex-col items-center justify-center gap-4 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <Award size={40}/>  
          <h4 className="text-2xl font-bold">Achievement Focus</h4> 
          <p>Celebrating and nurturing individual student achievements.</p> 
        </div>

        
        <div className="bg-green-400 text-center flex flex-col items-center justify-center gap-4 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <Braces size={40}/>  
          <h4 className="text-2xl font-bold">Modern Facilities</h4>  
          <p>State-of-the-art classrooms and learning environments.</p>
        </div>

      </div>
    </div>
  )
}

export default Card2

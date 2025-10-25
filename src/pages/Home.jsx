// Home.jsx
import React from 'react'
import Card1 from '../Card1'
import Card2 from '../Card2'
import Card3 from '../Card3'
import Card4 from '../Card4'

const Home = () => {
  return (
    <div className=''>
      {/* <h1 className="text-center mt-10 text-3xl font-bold">Welcome to Bright Future School</h1>
      <p className="text-center mt-3">Empowering students for a better tomorrow.</p> */}

      {/* Cards only visible on Home */}
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  )
}

export default Home

import React from 'react'
import UnderDevelopmentImg from "../assets/udImg.png"


const RedSause = () => {
  return (
    <div className='w-full h-[100vh] relative'>
      <img src={UnderDevelopmentImg} alt="" className='w-full h-full object-cover' />
      <h2 className='absolute text-white md:text-4xl text-2xl lg:text-6xl font-semibold flex justify-center w-full h-full items-center z-10 top-0 '>UNDER DEVELOPMENT</h2>
    </div>
  )
}

export default RedSause

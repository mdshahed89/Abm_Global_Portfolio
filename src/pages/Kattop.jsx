import React from 'react'
import UnderDevelopmentImg from "../assets/udImg.png"

const Kattop = () => {
  return (
    <div className='h-[100vh]'>
      <img src={UnderDevelopmentImg} alt="" className='w-full md:block hidden h-full object-cover' />
      <h2 className=' md:hidden text-white bg-black text-3xl font-bold flex justify-center w-full h-full items-center '>UNDER DEVELOPMENT</h2>
    </div>
  )
}

export default Kattop

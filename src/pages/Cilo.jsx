import React from 'react'
import UnderDevelopmentImg from "../assets/udImg.png"
import { Link } from 'react-router-dom'


const Cilo = () => {
  return (
    <div className='w-full h-[100vh] relative'>
      <img src={UnderDevelopmentImg} alt="" className='w-full md:block hidden h-full object-cover' />
      <h2 className=' md:hidden text-white bg-black text-3xl font-bold flex justify-center w-full h-full items-center'>UNDER DEVELOPMENT</h2>
    </div>
  )
}

export default Cilo

import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Button = () => {
  return (
    <div className='flex items-center justify-center gap-1'>
      <button className='text-white font-MontserratAlternates font-extralight'>Explore</button>
      <div className='text-[.5rem] bg-white rounded-[50%] p-[1px] text-blue-600'><FaArrowRight /></div>
    </div>
  )
}

export default Button

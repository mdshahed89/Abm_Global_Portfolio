import React from 'react'
import Upsilon from "../assets/Project1.jpg"
import Brandio from "../assets/Project2.jpg"
import BrandioLogo from "../assets/BrandioLogo.png"
import UpsilonLogo from "../assets/UpsilonLogo.png"
import "./style.css"
import Button from './Button'

const Brands = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-4 p-4 bg-white box-border'>
      <div className='relative flex justify-center'>
        <img src={Upsilon} alt="" />
        <div className='absolute flex flex-col justify-center items-center top-16'>
          <div className='h-[80px] w-[300px]'><img src={UpsilonLogo} className='w-full h-full object-cover' /></div>
          <div className=''><Button /></div>
        </div>
      </div>
      <div className='relative flex justify-center'>
        <img src={Brandio} alt="" className='' />
        <div className='absolute flex flex-col justify-center items-center top-16'>
          <div className='h-[72px] w-[236px]'><img src={BrandioLogo} className='w-full h-full object-cover' /></div>
          <div className=''><Button /></div>
        </div>
      </div>
    </div>
  )
}

export default Brands

import React from 'react'
import Marquee from "react-fast-marquee";
import Partner1 from "../assets/Image-1.png"
import Partner2 from "../assets/Image-2.png"
import Partner3 from "../assets/Image-3.png"
import Partner4 from "../assets/Image-4.png"
import Partner5 from "../assets/Image-5.png"
import Partner6 from "../assets/Image-6.png"
import Partner7 from "../assets/Image-7.png"
import Partner8 from "../assets/Image-8.png"

import "./style.css"

const Partners = () => {
  return (
    <div className=''>
      <h3 className='text-center text-xl font-semibold mb-10'>Our Partners</h3>
      <div className='flex items-center partner z-0 my-[5rem]  '>
        
        <Marquee direction='right' speed={100} className=''>

          <div className='flex items-center gap-[5rem] mb-16 '>

            <div className='w-[10rem] ml-20 '>
              <img src={Partner1} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner2} alt="" className='object-cover' />
            </div>

            <div className='w-[12rem] '>
              <img src={Partner3} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner4} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner5} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner6} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner7} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner8} alt="" className='object-cover' />
            </div>

          </div>

        </Marquee>
      </div>
      {/* <div className='px-[10%] pb-6'>
        <Marquee >

          <div className='flex gap-8'>

            <div className='w-[10rem] '>
              <img src={Partner1} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner2} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner3} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner4} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner5} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner6} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner7} alt="" className='object-cover' />
            </div>

            <div className='w-[10rem] '>
              <img src={Partner8} alt="" className='object-cover' />
            </div>

          </div>

        </Marquee>
      </div> */}
    </div>
  )
}

export default Partners

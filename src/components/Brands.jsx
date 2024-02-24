import React from 'react'
import "./style.css"
// import Button from './Button'
import Brand1 from "../assets/Brand1.jpg"
import Brand2 from "../assets/Brand2.jpg"
import Brand3 from "../assets/Brand3.jpg"
import Brand4 from "../assets/Brand4.jpg"
import Brand5 from "../assets/Brand5.jpg"
import Brand6 from "../assets/Brand6.jpg"
import { Link } from 'react-router-dom'

const Brands = () => {
  return (
    <section className='flex items-center justify-center z-0 ' id="concerns">
      <div className=' max-w-[2000px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:p-4 place-items-center my-4 md:my-0 bg-white'>
        <div className=' w-full '>
          <img src={Brand1} alt="" className=' w-full h-full object-cover!important  ' />
        </div>
        <div className=' w-full'>
          <img src={Brand2} alt="" className=' w-full h-full object-cover!important' />
        </div>
        <div className='w-full'>
          <Link
            to={"/kattop"}
            target='_blank'
          >
            <img src={Brand3} alt="" className=' w-full h-full object-cover' />
          </Link>
        </div>
        <div className='w-full'>
          <Link
            to={"/menta"}
            target='_blank'
          >
            <img src={Brand4} alt="" className=' w-full h-full object-cover' />
          </Link>
        </div>
        <div className='w-full'>
          <Link
            to={"/cilo"}
            target='_blank'
          >
            <img src={Brand5} alt="" className=' w-full h-full object-cover' />
          </Link>
        </div>
        <div className='w-full'>
          <Link
            to={"/redsause"}
            target='_blank'
          >
            <img src={Brand6} alt="" className=' w-full h-full object-cover' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Brands

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
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:p-4 place-items-center my-4 md:my-0 bg-white'>
      <div className='relative'>
        <img src={Brand1} alt=""  className='rounded-lg'/>
        <h3 className='absolute top-5 right-5 bg-[#d1d0d0] text-black font-bold rounded-lg px-8 py-2 '>Running</h3>
      </div>
      <div className='relative'>
        <img src={Brand2} alt="" className='rounded-lg' />
        <h3 className='absolute top-5 right-5 bg-[#d1d0d0] text-black font-bold rounded-lg px-8 py-2 '>Running</h3>
      </div>
      <div className='relative'>
        <Link
        to={"/kattop"}
        >
        <img src={Brand3} alt="" className='rounded-lg' />
        </Link>
        {/* <h3 className=' '>Running</h3> */}
      </div>
      <div className=''>
      <Link
        to={"/menta"}
        >
        <img src={Brand4} alt="" className='rounded-lg' />
        </Link>
      </div>
      <div className=''>
      <Link
        to={"/cilo"}
        >
        <img src={Brand5} alt="" className='rounded-lg' />
        </Link>
      </div>
      <div className=''>
      <Link
        to={"/redsause"}
        >
        <img src={Brand6} alt="" className='rounded-lg' />
        </Link>
      </div>
    </div>
    </section>
  )
}

export default Brands

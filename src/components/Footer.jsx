import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-[124px] bg-[#252525] flex items-center justify-center text-white text-sm font-MontserratAlternates'>
        <div className='w-2/3'>
        <div className='border-b-[1px] border-white flex justify-between pb-1'>
            <div className='px-2'>Contact +880 1317 68 66 95</div>
            <div className='flex gap-4'>
                <FaFacebookSquare className='cursor-pointer text-base'/>
                <TfiLinkedin className='cursor-pointer text-base'/>
                <FaTwitter className='cursor-pointer text-base'/>
            </div>
        </div>
        <div className='flex justify-between pt-1 text-sm'>
            <div className='px-2'>Copyright 2024 ABM Global Ltd. All rights reserved.</div>
            <div className='flex gap-5'>
                <p className='cursor-pointer'>Privacy Policy</p>
                <p>|</p>
                <p className='cursor-pointer'>Terms of Use</p>
                <p>|</p>
                <p className='cursor-pointer'>Sales and Refunds</p>
                <p>|</p>
                <p className='cursor-pointer'>Legal</p>
            </div>
            <div>Bangladesh</div>
        </div>
        </div>
      
    </div>
  )
}

export default Footer

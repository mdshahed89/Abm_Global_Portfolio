import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className='hidden lg:block'>
                <div className=' w-full h-[124px] bg-[#252525] flex items-center justify-center text-white text-sm '>
                    <div className='w-2/3'>
                        <div className='border-b-[1px] border-white flex justify-between pb-1'>
                            <div className='px-2'>Contact +880 1317 68 66 95</div>
                            <div className='flex gap-4'>
                                <Link
                                to={"https://www.facebook.com/abmgloballtd"}
                                target='_blank'
                                >
                                <FaFacebookSquare className='cursor-pointer text-base' />
                                </Link>
                                <Link
                                to={"https://www.linkedin.com/company/abmgloballtd"}
                                target='_blank'
                                >
                                <TfiLinkedin className='cursor-pointer text-base' />
                                </Link>
                            </div>
                        </div>
                        <div className='flex justify-between pt-1 text-sm'>
                            <div className='px-2'>Copyright 2024 ABM Global Ltd. All rights reserved.</div>
                            <div className='flex gap-2'>
                                <p className='cursor-pointer'>Privacy Policy</p>
                                <p>|</p>
                                <p className='cursor-pointer'>Terms of Use</p>
                                <p>|</p>
                                <p className='cursor-pointer'>Sales and Refunds</p>
                                <p>|</p>
                                <p className='cursor-pointer'>Legal</p>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
            <div className='lg:hidden block'>
                <div className='w-full bg-[#252525] flex items-center justify-center flex-col text-white'>
                    {/* <div className='border-b border-[#d0cfcf] px-7 py-2'>Contact +880 1317 68 66 95</div> */}
                    <div className='flex gap-4 py-4 border-b w-[80%] justify-center'>

                        <Link
                        to={"https://www.facebook.com/abmgloballtd"}
                        target='_blank'
                        >
                        <FaFacebookSquare className='cursor-pointer text-xl' />
                        </Link>
                        <Link
                        to={"https://www.linkedin.com/company/abmgloballtd"}
                        target='_blank'
                        >
                        <TfiLinkedin className='cursor-pointer text-xl' />
                        </Link>
                    </div>
                    <div className='flex gap-6 mt-4'>
                        <div className='flex flex-col gap-4'>
                            <p className='cursor-pointer'>Privacy Policy</p>
                            <p className='cursor-pointer'>Sales and Refunds</p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <p>|</p>
                            <p>|</p>

                        </div>

                        <div className='flex gap-4 flex-col'>
                            <p className='cursor-pointer text-right'>Terms of Use</p>
                            <p className='cursor-pointer text-right'>Legal</p>
                        </div>
                    </div>
                    <div className='px-2 pt-5 pb-2 text-sm text-[#d7d6d6]'>Copyright 2024 ABM Global Ltd. All rights reserved.</div>
                </div>
            </div>
        </>
    )
}

export default Footer

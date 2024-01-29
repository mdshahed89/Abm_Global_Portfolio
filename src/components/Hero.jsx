import React from 'react'
import Video from "../assets/heroVideo.mp4"
import TypeWriter from './Typewriter.jsx'

const Hero = () => {
  return (
    <div className='w-full h-[600px] md:h-[700px] lg:h-[800px] relative z-40'>
        <div className='absolute w-full h-full bg-[rgba(0,0,0,.9)]'></div>
      <video src={Video} autoPlay loop muted className='w-full h-full object-cover'/>
      <div className='absolute h-[calc(100%-70px)] top-0 flex w-full justify-center items-center gap-2 z-50 text-base md:text-[2rem] lg:text-[3rem] text-white font-BankGothic'>
      <h3 className=''>EXPLORE THE</h3>
      <div className=''><TypeWriter /></div>
      </div>
    </div>
  )
}

export default Hero

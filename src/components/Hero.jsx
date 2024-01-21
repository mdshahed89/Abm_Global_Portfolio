import React from 'react'
import HeroBg from "../assets/hero.mp4"
import Video2 from "../assets/video2.mp4"
import Video3 from "../assets/video3.mp4"
import TypeWriter from './Typewriter.jsx'

const Hero = () => {
  return (
    <div className='w-full h-[800px] relative'>
        <div className='absolute w-full h-full bg-[rgba(0,0,0,.9)]'></div>
      <video src={Video3} autoPlay loop muted className='w-full h-full object-cover'/>
      <div className='absolute text-5xl w-full h-[calc(100%-69px)] top-0 text-white flex items-center justify-center'><TypeWriter text="EXPLORE THE "/></div>
    </div>
  )
}

export default Hero

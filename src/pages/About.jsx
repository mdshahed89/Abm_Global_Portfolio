import React from 'react'
import ContactBg from "../assets/ContactBg.jpg"


const About = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-[40rem]'>
        <img src={ContactBg} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='flex justify-center items-center text-lg my-10'>
        <div className='flex justify-center flex-col w-[90%] md:w-[70%] lg:w-[50%] '>
          <h3 className='font-bold mb-2 mt-5'>About Us</h3>
          <p className='text-[14px] '>ABM Global Limited stands as a beacon of innovation and excellence in the modern business landscape, serving as a powerhouse of dynamic solutions across multiple industries. With a rich heritage rooted in a relentless pursuit of excellence, ABM Global Limited has emerged as a trusted partner for businesses seeking transformative solutions and unparalleled expertise.
            Since our inception, we have remained steadfast in our commitment to pushing the boundaries of possibility, driving innovation, and delivering tangible value to our clients, stakeholders, and communities worldwide. 
            <br />Our journey is characterized by a relentless pursuit of excellence, unwavering integrity, and an unyielding dedication to customer satisfaction.
            At the heart of ABM Global Limited lies a passion for innovation and a relentless drive to anticipate and meet the evolving needs of our clients. We pride ourselves on our ability to navigate complex challenges, leverage emerging technologies, and harness the collective expertise of our diverse team to deliver innovative solutions that drive sustainable growth and competitiveness.</p>
          <h3 className='font-bold mb-2 mt-5'>Our Mission</h3>
          <p className='text-[14px] '>At ABM Global Limited, our mission is to deliver superior value to our clients, stakeholders, and communities by leveraging our expertise, resources, and passion for innovation. We strive to exceed expectations through proactive leadership, continuous improvement, and a relentless pursuit of excellence.</p>
          <h3 className='font-bold mb-2 mt-5'>Our Vision</h3>
          <p className='text-[14px] '>Our vision at ABM Global Limited is to be recognized globally as a leading provider of cutting-edge solutions, setting benchmarks for quality, innovation, and customer satisfaction across diverse industries.</p>
        </div>
      </div>
    </div>
  )
}

export default About

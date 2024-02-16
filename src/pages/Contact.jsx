import React, {useState} from 'react'
import ContactBg from "../assets/ContactBg.jpg"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  };


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7w19fx9', 'template_qu55xan', form.current, {
        publicKey: 'jp9VeBoMdvBwkUNfP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };





  return (
    <div className='w-full h-[100vh] relative  '>
      <img src={ContactBg} alt="" className='w-full h-full object-cover' />

      <div className='absolute top-0 w-full h-full flex-col lg:flex-row flex items-center justify-center gap-[5rem] lg:gap-[10rem] px-[5%] lg:px-[10%]'>
        <div>
          <h3 className='text-whit font-BankGothic text-2xl lg:text-4xl text-white '>ABM GLOBAL LTD.</h3>
        </div>



        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full lg:w-[30rem] text-black bg-white rounded-md p-[3rem]'>
          <h3 className='text-center text-3xl font-semibold mb-10'>Get in Touch</h3>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col border-b'>
              <label htmlFor="" className='text-sm'>Your Name</label>
              <input required type="text" name="from_name" className='outline-none border-none ' />
            </div>
            <div className='flex flex-col border-b'>
              <label htmlFor="" className='text-sm'>Your Email</label>
              <input required type="email" name="user_email" className='outline-none border-none ' />
            </div>
            <div className='flex flex-col border-b'>
              <label htmlFor="" className='text-sm'>Phone Number</label>
              <input required type="text" name="user_mobile" className='outline-none border-none ' />
            </div>
            <div className='flex flex-col border-b'>
              <label htmlFor="" className='text-sm'>Your Address</label>
              <input type="text" name="user_address" className='outline-none border-none ' />
            </div>
            <div className='flex flex-col border-b'>
              <label htmlFor="" className='text-sm'>Message</label>
              <textarea required name="message" className='outline-none border-none pb-10' />
            </div>
          </div>
          <input onClick={handleClick} type="submit" value="Send" className='cursor-pointer mt-8 px-3 py-2 border text-base text-mono bg-black text-white rounded-md font-semibold'></input>
        </form>


       {
        isVisible ?  (<div className='bg-green-200 absolute text-xl flex items-center gap-2 rounded px-2 py-1 top-[5rem] right-[2rem] '>
        <h3 className='text-2xl text-green-600 font-black bg-green-300 p-2 rounded-[50%] '>✓</h3>
        <h3 className='font-semibold'>Sent Successfully</h3>
      </div>) : null
       }



      </div>

    </div>
  )
}

export default Contact

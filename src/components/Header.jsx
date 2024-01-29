import React, { useState } from 'react'
import AbmLogo from "../assets/AbmLogo.png"
import { Link, NavLink } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import { HiBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import "./style.css"

const Header = () => {

  const [searchBox, setSearchBox] = useState("nssBox");
  const [mobileNav, setMobileNav] = useState("nsmNav");

  const [search, setSearch] = useState(false);
  const handleSurchButton = () => {
    setSearch(!search)
    setSearchBox(searchBox === "ssBox" ? "nssBox" : "ssBox");
  }

  const handleMenuBtn = () => {
    setMobileNav(mobileNav === "nsmNav" ? "smNav" : "nsmNav");
  }

  return (
    <>
      <div className={`bg-[#252525] ${searchBox === "ssBox" ? "bg-black" : null} w-full h-[69px] flex items-center justify-between md:justify-center gap-14 box-border transition-all duration-300 header`}>
        <div className='flex h-full items-center justify-center'>
          <Link to={"/"}><img src={AbmLogo} alt="" className='w-[80px] h-[50px] bottom-0 object-cover' /></Link>
        </div>
        <div className='hidden md:block'>
          <nav className='text-[#ffffff] flex items-center justify-center gap-14 box-border font-MontserratAlternates'>
            <NavLink
              to={"/"}
              className={({ isActive }) => `${isActive ? "active" : null} duration-300 text-base transition navs`}
            >Home</NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => `${isActive ? "active" : null} duration-300 text-base transition navs`}
            // style={textStyle}
            >About Us</NavLink>
            <NavLink
              to={"/service"}
              className={({ isActive }) => `${isActive ? "active" : null} duration-300 text-base transition navs`}
            >Services</NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => `${isActive ? "active" : null} duration-300 text-base transition navs`}
            >Contact</NavLink>
          </nav>
        </div>
        <div className='flex gap-6 text-white text-2xl items-center mr-5'>
          <IoMdSearch className={`text-[#F3F3F3] text-xl object-cover cursor-pointer ${search ? "searchActive" : null}`} onClick={handleSurchButton} />
          <HiBars2 onClick={handleMenuBtn} className='block md:hidden cursor-pointer' />
        </div>
      </div>

      <div className={`absolute h-[100vh] w-full z-50 bg-black text-white top-0 left-0 ${mobileNav} transition-all duration-500`}>

        <div className='w-full flex items-center justify-between h-[69px]'>
          <div className=''>
            <Link to={"/"}><img src={AbmLogo} alt="" className='w-[80px] h-[50px] bottom-0 object-cover' /></Link>
          </div>

          <div className='text-white mr-5 text-2xl'>
            <RxCross2 onClick={handleMenuBtn} className='block md:hidden transition-all duration-300 cursor-pointer' />
          </div>
        </div>

        <div className='flex left-0 flex-col gap-5 pt-16 pl-[10%] text-2xl font-semibold w-full h-full'>
          <NavLink
            to={"/"}
            className={({ isActive }) => `${isActive ? "activate" : null}`}
          >Home</NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => `${isActive ? "activate" : null}`}
          // style={textStyle}
          >About Us</NavLink>
          <NavLink
            to={"/service"}
            className={({ isActive }) => `${isActive ? "activate" : null}`}
          >Services</NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => `${isActive ? "activate" : null}`}
          >Contact</NavLink>
        </div>



      </div>

      <div className={`absolute w-full h-[20rem] bg-black text-[#e0dfdf] z-50 transition-all duration-500 ${searchBox}`}>
        <div className='flex pl-[10%] md:pl-[20%] gap-4 items-center text-2xl pt-[5rem]'>
          <IoMdSearch className='' />
          <input type="text" placeholder='Search Upsilonabm.com' className='bg-transparent placeholder-[#e0e0e0] outline-none border-none' />
        </div>
      </div>
    </>
  )
}

export default Header

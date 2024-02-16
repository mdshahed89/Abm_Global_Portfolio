import React, { useState } from 'react'
import AbmLogo2 from "../assets/AbmLogo2.png"
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
    setSearchBox("ssBox");
  }

  const handleMenuBtn = () => {
    setMobileNav(mobileNav === "nsmNav" ? "smNav" : "nsmNav");
  }
  const handleMenuClick = () => {
    setMobileNav(mobileNav === "nsmNav" ? "smNav" : "nsmNav");
  }

  const [cross, setCross] = useState(false);

  const toggleSearch = () => {
    setCross(!cross)
  }

  const handleSearchCross = () => {
    setSearchBox("nssBox")
  }

  return (
    <>
      <div className='relative'>
        <div className={`bg-[rgba(0,0,0,0.8)] ${searchBox === "ssBox" ? "bg-[black]" : null} hidden md:flex fixed z-50 w-full h-[55px]  items-center justify-between md:justify-center gap-14 box-border transition-all duration-300 header`}>
          <div className='flex justify-center w-[40px] bottom-[-5rem] max-h-[40px]'>
            <Link to={"/"}><img src={AbmLogo2} alt="" className='w-full h-full object-cover transform scale-x-[-1]' /></Link>
          </div>
          <div className='hidden md:block'>
            <nav className='text-[#ffffff] flex items-center justify-center gap-14 box-border'>
              <NavLink
                to={"/"}
                className={({ isActive }) => `${isActive ? "active" : null} duration-300 text-[12px] transition navs`}
              >Home</NavLink>
              <NavLink
                href='/about'
                to={"/about"}
                className={({ isActive }) => `${isActive ? "active " : null} duration-300 text-[12px] transition navs`}
              // style={textStyle}
              >About Us</NavLink>
              <a href='#concerns'
                className={`duration-300 text-[12px] transition navs `}
              // onClick={handleActive}
              >Our Concerns</a>
              <NavLink

                to={"/contact"}
                className={({ isActive }) => `${isActive ? "active" : null} duration-300 text-[12px] transition navs`}
              >Contact</NavLink>
            </nav>
          </div>
          <div className='flex gap-6 text-white text-2xl items-center mr-5'>
            <button className='transition-all duration-300 ease-in-out' onClick={toggleSearch}>
              {
                cross === false ? <IoMdSearch className={`text-[#F3F3F3] text-xl object-cover transition-all duration-500 ease-in-out cursor-pointer ${search ? "searchActive" : null}`} onClick={handleSurchButton} /> : <RxCross2 className='text-[#F3F3F3] transition-all duration-500 ease-in-out text-xl' onClick={handleSearchCross} />
              }
            </button>
            <HiBars2 onClick={handleMenuBtn} className='block md:hidden cursor-pointer' />
          </div>
        </div>
        <div className={`fixed w-full h-[20rem] top-0 bg-black text-[#e0dfdf] z-30 transition-all duration-500 ${searchBox}`}>
          <div className='flex pl-[10%] md:pl-[20%] gap-4 items-center text-2xl pt-[5rem]'>
            <IoMdSearch className='' />
            <input type="text" placeholder='Search Abm Global Ltd.' className='bg-transparent placeholder-[#8a8a8a] outline-none border-none' />
          </div>
        </div>
      </div>


      <div className={`bg-[rgba(0,0,0,0.8)] ${searchBox === "ssBox" ? "bg-[black]" : null} flex md:hidden fixed z-50 w-full h-[55px]  items-center justify-between gap-14 box-border transition-all duration-300 header px-5`}>
        <div>
          <HiBars2 onClick={handleMenuBtn} className='text-white text-2xl cursor-pointer' />
        </div>
        <div className='flex justify-center w-[40px] bottom-[-5rem] max-h-[40px]'>
          <Link to={"/"}><img src={AbmLogo2} alt="" className='w-full h-full object-cover transform scale-x-[-1]' /></Link>
        </div>
        <div>
          <button className='transition-all duration-500 ease-in-out' onClick={toggleSearch}>
            {
              cross === false ? <IoMdSearch className={`text-[#F3F3F3] text-xl transition-all duration-500 ease-in-out object-cover cursor-pointer ${search ? "searchActive" : null}`} onClick={handleSurchButton} /> : <RxCross2 className='text-[#F3F3F3] text-xl transition-all duration-500 ease-in-out' onClick={handleSearchCross} />
            }
          </button>
        </div>
      </div>


      <div className={`fixed h-[100vh] w-full z-50 bg-black text-white top-0 left-0 ${mobileNav} transition-all duration-500`}>

        <div className='w-full flex items-center justify-between h-[69px]'>
          <div className='pl-5'>
            <Link to={"/"}><img src={AbmLogo2} alt="" className='w-[40px] bottom-0 object-cover' /></Link>
          </div>

          <div className='text-white mr-5 text-2xl'>
            <RxCross2 onClick={handleMenuBtn} className='block md:hidden transition-all duration-300 cursor-pointer' />
          </div>
        </div>

        <div className='flex left-0 flex-col gap-5 pt-16 pl-[10%] text-xl font-semibold w-full h-full'>
          <NavLink
            to={"/"}
            onClick={handleMenuClick}
            className={({ isActive }) => `${isActive ? "activate" : null}`}
          >Home</NavLink>
          <NavLink
            to={"/about"}
            onClick={handleMenuClick}
            className={({ isActive }) => `${isActive ? "activate" : null}`}
          // style={textStyle}
          >About Us</NavLink>
          <NavLink
            to="#concerns"
            onClick={handleMenuClick}
            className={({ isActive }) => `${isActive ? "activate" : null}`}
          >Our Concern</NavLink>
          <NavLink
            to={"/contact"}
            onClick={handleMenuClick}
            className={({ isActive }) => `${isActive ? "activate" : null}`}
          >Contact</NavLink>
        </div>
      </div>


    </>
  )
}

export default Header

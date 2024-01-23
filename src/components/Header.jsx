import React, { useState } from 'react'
import AbmLogo from "../assets/AbmLogo.png"
import { Link, NavLink } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import "./style.css"
 
const Header = () => {


  const [search, setSearch] = useState(false);
  const handleSurchButton = () => {
    setSearch(!search)
  }
  
  return (

    <div className='bg-[#252525] w-full h-[69px] flex items-center justify-center gap-14 box-border transition-all duration-300 header'>
      <div className='flex h-full items-center justify-center'>
        <Link to={"/"}><img src={AbmLogo} alt="" className='w-[80px] h-[20px] bottom-0 object-cover'/></Link>
      </div>
      <div>
        <nav className='text-[#ffffff] flex items-center justify-center gap-14 box-border font-MontserratAlternates'>
          <NavLink
          to={"/"}
          className={({isActive})=>`${isActive ? "active" : null} duration-300 text-base transition navs`}
          >Home</NavLink>
          <NavLink
          to={"/about"}
          className={({isActive})=>`${isActive ? "active" : null} duration-300 text-base transition navs`}
          // style={textStyle}
          >About Us</NavLink>
          <NavLink
          to={"/service"}
          className={({isActive})=>`${isActive ? "active" : null} duration-300 text-base transition navs`}
          >Services</NavLink>
          <NavLink
          to={"/contact"}
          className={({isActive})=>`${isActive ? "active" : null} duration-300 text-base transition navs`}
          >Contact</NavLink>
        </nav>
      </div>
      <div>
        <IoMdSearch className={`text-[#F3F3F3] text-xl object-cover cursor-pointer ${search ? "searchActive" : null}`} onClick={handleSurchButton}/>
      </div>
    </div>
  )
}

export default Header

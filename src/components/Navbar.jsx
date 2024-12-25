import React, { useState } from 'react'
import menu_icon from '../assets/menu_icon.svg'
import logo from "../assets/logo.svg"
import cross_icon from '../assets/cross_icon.png'
import { ImCross } from "react-icons/im";
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='c text-white py-2 px-8 md:px-16 lg:px-24 sticky top-0 z-50 bg-transparent'>
      <div className='container py-2 flex justify-center  bg-[#b9bbbf47] rounded-full  md:justify-between  items-center'>
        <div className='text-2xl font-bold'>Ganesh M</div>
        <div className='space-x-6 hidden md:inline mr-10'>
          <a href="#home" className='hover:text-[#5a88e6] hover:text-xl '>Home</a>
          <a href="#about" className='hover:text-[#5a88e6] hover:text-xl'>About Me</a>
          <a href="#service" className='hover:text-[#5a88e6] hover:text-xl '>Services</a>
          <a href="#project" className='hover:text-[#5a88e6] hover:text-xl '>Projects</a>
          {/* <a href="#contact" className='hover:text-[#5a88e6] hover:text-xl  '>Contact</a> */}
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'><a href="#contact">Contact</a></button>
        < img onClick={() => setShowMenu(true)} className='w-6 md:hidden ml-auto' src={menu_icon} alt="" />

        {/* -------------------------Mobile menu---------------- */}
        <div className={`${showMenu ? "fixed w-full " : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-[#13195e] text-white transition-all`}>
          <div className='flex items-center justify-center md:justify-between px-5 py-6'>
            <div className='text-2xl font-bold'>GM</div>
            {/* <img className='w-7 ml-[10rem]' onClick={() => setShowMenu(false)} src={cross_icon} alt="" /> */}
            <p className='w-7 ml-auto' onClick={() => setShowMenu(false)}><ImCross /></p>

          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-2xl font-medium'>
            <a onClick={() => setShowMenu(false)} href="#home"><p className='px-4 py-2 rounded inline-block'>Home</p> </a>
            <a onClick={() => setShowMenu(false)} href="#about"><p className='px-4 py-2 rounded inline-block'>About me</p> </a>
            <a onClick={() => setShowMenu(false)} href="#service"><p className='px-4 py-2 rounded inline-block'>Services</p> </a>
            <a onClick={() => setShowMenu(false)} href="#project"><p className='px-4 py-2 rounded inline-block'>Projects </p></a>
            <a onClick={() => setShowMenu(false)} href="#contact"><p className='px-4 py-2 rounded inline-block'>Contact</p></a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
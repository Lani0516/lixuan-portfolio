import React, { useState } from 'react'

import { AiOutlineHome, AiOutlineAppstore, AiOutlineAudit, AiOutlineProject, AiOutlineMail, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const TopNav = () => {
  // Nav Toggle
  const [nav, setNav] = useState(false)
  const handlerNav = () => {
    setNav(!nav)
  }

  // Theme Toggle
  const [theme, setTheme] = useState(false)
  const hanlderTheme = () => {
    setTheme(!theme)
  }

  return (
    <nav className='relative flex justify-between px-[5%] py-5 md:py-8 items-center z-[99]'>
    
      {/* Title */}
      <a href="/" className='text-xl md:text-2xl font-poppins font-[400] tracking-wide px-[0.5rem]'>LIXUAN</a>

      {/* Nav Items */}
      <NavBar />

      {/* Nav Items */}
      {
        nav ?
        (
          <div>
            {/* Close Botton */}
            <AiOutlineClose 
              onClick={ handlerNav }
              className='fixed top-[4%] right-[7%] cursor-pointer md:hidden text-lg z-[99]'
            />

            {/* Navigations */}
            <NavMenu />

          </div>
        ) : (
          <div className='flex items-center'>
            {/* Change Theme */}
            {
              theme ? (
                <div>
                  <BsFillMoonFill
                    onClick={ hanlderTheme }
                    className='text-xl cursor-pointer hover:bg-cyan-900/20 box-content p-[0.5rem] rounded-3xl'
                  />
                </div>
              ) : (
                <div>
                  <BsSun 
                    onClick={ hanlderTheme }
                    className='text-xl cursor-pointer hover:bg-cyan-900/20 box-content p-[0.5rem] rounded-3xl'
                  />
                </div>
              )
            }
              
            {/* Active Botton */}
            <AiOutlineMenu
              onClick={ handlerNav }
              className='cursor-pointer md:hidden z-[99] hover:bg-cyan-900/20 box-content p-[0.5rem] rounded-3xl'
            />

          </div>
        )
      }
      
    </nav>
  )
}

const NavBar = () => {
  return (
    <div className='hidden md:flex items-center gap-5'>
      <NavItem path='home' />
      <NavItem path='about' />
      <NavItem path='portfolio' />
      <NavItem path='blog' />
      <NavItem path='contact' />
    </div>
  )
}

const NavMenu = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-10 bg-stone-100/90 gap-5'>
      <NavItem path='home'>
        <AiOutlineHome className='pr-2 box-content' />
      </NavItem>

      <NavItem path='about'>
        <AiOutlineAppstore className='pr-2 box-content' />
      </NavItem>

      <NavItem path='portfolio'>
        <AiOutlineAudit className='pr-2 box-content' />
      </NavItem>

      <NavItem path='blog'>
        <AiOutlineProject className='pr-2 box-content' />
      </NavItem>

      <NavItem path='contact'>
        <AiOutlineMail className='pr-2 box-content' />
      </NavItem>
    </div>
  )
}

const NavItem = (props) => {
  const path = (props.path === 'home') ? '/' : '/'+props.path

  return (
      <Link to={path} className='flex items-center text-lg md:text-base bg-stone-200/40 md:bg-transparent w-[75%] md:w-auto justify-center py-2 md:py-0 rounded-2xl md:rounded-none shadow-md md:shadow-none capitalize md:hover:border-b-2 border-cyan-800/50'>
        {props.children} {props.path}
      </Link>
  )
}

export default TopNav

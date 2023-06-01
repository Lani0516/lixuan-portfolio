import React, { useState, useEffect, useRef } from 'react'

import {
  NavLink
} from './index'
import { 
  AiOutlineHome, AiOutlineAppstore, AiOutlineAudit, AiOutlineProject, AiOutlineMail, AiOutlineMenu, AiOutlineClose 
} from 'react-icons/ai'
import { 
  BsSun, BsFillMoonFill 
} from 'react-icons/bs';


const TopNav = () => {
  const [nav, setNav] = useState(false)
  const handlerNav = () => {
    setNav(!nav)
  }

  const [theme, setTheme] = useState(false)
  const handlerTheme = () => {
    setTheme(!theme)
  }
  
  const [scrollTop, setScrollTop] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const windowHeight = useRef(window.innerHeight)

  return (
    <nav className={`${scrollTop >= (windowHeight.current - 100) ? 'shadow-lg backdrop-blur-sm backdrop-brightness-95 fixed' : 'absolute'}  w-full flex justify-between px-[1.15rem] md:px-[3rem] py-5 md:py-8 items-center z-[99]`}>
      <a href="/" className='text-xl md:text-2xl font-poppins font-[400] tracking-wide px-[0.5rem]'>LIXUAN</a>
      <NavBar />
      { nav ? (
          <React.Fragment>
            <AiOutlineClose 
              onClick={ handlerNav }
              className='fixed top-[4%] right-[5%] cursor-pointer md:hidden text-lg z-[99]'
            />
            <NavMenu toggle={ handlerNav } />
          </React.Fragment>
        ) : ( <MobileNavBar theme={ theme } toggle={[handlerNav, handlerTheme]} /> )
      }
    </nav>
  )
}

const MobileNavBar = (props) => {
  return (
    <nav className='flex items-center'>
      { props.theme ? (
          <BsFillMoonFill
            onClick={ props.toggle[1] }
            className='text-xl cursor-pointer hover:bg-cyan-900/20 box-content p-[0.5rem] rounded-3xl'
          />
        ) : (
          <BsSun 
            onClick={ props.toggle[1] }
            className='text-xl cursor-pointer hover:bg-cyan-900/20 box-content p-[0.5rem] rounded-3xl'
          />
        )
      }
      <AiOutlineMenu
        onClick={ props.toggle[0] }
        className='cursor-pointer md:hidden z-[99] hover:bg-cyan-900/20 box-content p-[0.5rem] rounded-3xl'
      />
    </nav>
  )
}

const NavBar = () => {
  return (
    <nav className='hidden md:flex items-center gap-5'>
      <NavItem name='Home' />
      <NavItem name='About' />
      <NavItem name='Portfolio' />
      <NavItem name='Blog' />
      <NavItem name='Contact' />
    </nav>
  )
}

const NavMenu = ({ toggle }) => {
  return (
    <nav className='fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-10 bg-stone-100/90 gap-5'>
      <NavItem toggle={toggle} name='Home'>
        <AiOutlineHome className='scale-110 p-2 box-content' />
      </NavItem>

      <NavItem toggle={toggle} name='About'>
        <AiOutlineAppstore className='scale-125 p-2 box-content' />
      </NavItem>

      <NavItem toggle={toggle} name='Portfolio'>
        <AiOutlineAudit className='scale-125 p-2 box-content' />
      </NavItem>

      <NavItem toggle={toggle} name='Blog'>
        <AiOutlineProject className='scale-125 p-2 box-content' />
      </NavItem>

      <NavItem toggle={toggle} name='Contact'>
        <AiOutlineMail className='scale-125 p-2 box-content' />
      </NavItem>
    </nav>
  )
}

const NavItem = ({ name, toggle, children }) => {
  return (
    <NavLink name={name} toggle={toggle} className='rounded-md flex items-center text-lg md:text-base bg-white md:bg-transparent w-[75%] md:w-auto justify-center py-2 md:py-1 md:px-2 hover:bg-slate-500/30 shadow-md md:shadow-none'>
      {children} {name}
    </NavLink>
  )
}

export default TopNav

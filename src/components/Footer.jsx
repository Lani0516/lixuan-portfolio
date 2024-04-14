import React, { useRef } from 'react'

import faviconImg from '../assets/favicon.ico'

import {
  useElementOnScreen
} from '../hooks'
import {
  IconButton, NavLink
} from './index'
import {
  FaGoogleDrive, FaInstagram, FaGithub
} from 'react-icons/fa';


const Footer = () => {
  const targetRef = useRef(null)
  const isVisible = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }, targetRef)

  const currentYear = new Date().getFullYear()

  return (
    <footer ref={targetRef} className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-[6rem]' } transition-all duration-500 pt-12 w-full bg-white mt-16 shadow-2xl`}>
      <div className='flex flex-wrap justify-center items-center gap-y-6 gap-x-12 text-center md:justify-between md:mx-9'>
        <NavLink name='Home' className='flex items-center justify-center gap-1'>
          <img src={faviconImg} alt="logo" className='w-10' />
          <h1 className='text-3xl font-bold text-gray-700'>Lixuan</h1>
        </NavLink>
        <ul className='flex flex-wrap items-center gap-y-2 gap-x-8 md:gap-4'>
          <NavLink name='About' className='md:py-1 md:px-2 hover:bg-slate-500/30 rounded-md' />
          <NavLink name='Portfolio' className='md:py-1 md:px-2 hover:bg-slate-500/30 rounded-md' />
          <NavLink name='Blog' className='md:py-1 md:px-2 hover:bg-slate-500/30 rounded-md' />
          <NavLink name='Contact' className='md:py-1 md:px-2 hover:bg-slate-500/30 rounded-md' />
        </ul>
      </div>
      <div className="my-5 mx-8 flex flex-col items-center justify-center border-t border-gray-400/30 py-4 md:flex-row md:justify-between gap-1">
        <span className='text-sm text-gray-500'>
          Copyright &copy; {currentYear} by Lixuan Chen & Lani Liu.
        </span>
        <div className='flex'>
          <IconButton href='https://www.instagram.com/jinriheon/'>
            <FaInstagram />
          </IconButton>
          <IconButton href='https://github.com/lixuan1128'>
            <FaGithub />
          </IconButton>
          <IconButton href='https://drive.google.com/drive/folders/1-eitF0sUTJDiJ78tbvAk3ti_b3iQ_E42'>
            <FaGoogleDrive />
          </IconButton>
        </div>
      </div>
    </footer>
  )
}

export default Footer
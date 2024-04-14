import React, { useRef } from 'react'
import { isMobile } from 'react-device-detect'

import {
  useElementOnScreen
} from '../hooks'

import {
  FaInstagram, FaGithub
} from 'react-icons/fa';
import {
  FiMail
} from 'react-icons/fi'
import {
  BsDiscord
} from 'react-icons/bs'


const Contact = () => {
  const targetRef = useRef(null)
  const isVisible = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }, targetRef)

  return (
    <section ref={targetRef} className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-10%]' } transition-all duration-500 flex items-center justify-center flex-col gap-6 2xl:gap-8 bg-white mx-6 py-8 rounded-xl shadow-lg px-8 md:px-12 flex-wrap mt-16`}>
      <h1 className='text-[2rem] md:text-[4rem] leading-[2rem] text-gray-600 font-bold md:my-4'>
        Contact
      </h1>

      <article className='relative flex flex-wrap gap-8 px-8 md:px-12 lg:px-14 items-center justify-center'>
        <a href='https://www.instagram.com/jinriheon/' className={`${!isMobile && 'hover:bg-slate-100'} transition-all flex items-center justify-center border-4 shadow-md w-64 h-24 box-border px-8 py-4`}>
          <div className='flex items-center gap-1 lg:gap-2 text-3xl text-gray-600'>
            <FaInstagram />
            Instagram
          </div>
        </a>
        <a href='mailto:' className={`${!isMobile && 'hover:bg-slate-100'} transition-all flex items-center justify-center border-4 shadow-md w-64 h-24 box-border px-8 py-4`}>
          <div className='flex items-center gap-1 lg:gap-2 text-3xl text-gray-600'>
            <FiMail />
            Mail Me
          </div>
        </a>
        <a href='https://github.com/lixuan1128' className={`${!isMobile && 'hover:bg-slate-100'} transition-all flex items-center justify-center border-4 shadow-md w-64 h-24 box-border px-8 py-4`}>
          <div className='flex items-center gap-1 lg:gap-2 text-3xl text-gray-600'>
            <FaGithub />
            Github
          </div>
        </a>
        <a href='https://discord.com/users/934407155715543050' className={`${!isMobile && 'hover:bg-slate-100'} transition-all flex items-center justify-center border-4 shadow-md w-64 h-24 box-border px-8 py-4`}>
          <div className='flex items-center gap-1 lg:gap-2 text-3xl text-gray-600'>
            <BsDiscord />
            Discord
          </div>
        </a>
      </article>
    </section>
  )
}

export default Contact
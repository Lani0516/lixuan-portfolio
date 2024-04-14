import React, { useRef } from 'react'
import { TypeAnimation } from 'react-type-animation';

import homeLixaun from '../assets/home-lixuan.png'


import {
  useElementOnScreen
} from '../hooks'
import {
  NavLink, IconButton
} from '../components'
import {
  FaGoogleDrive, FaInstagram, FaGithub
} from 'react-icons/fa';


const Home = () => {
  const targetRef = useRef(null)
  const isVisible = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }, targetRef)

  return (
    <section ref={targetRef} className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[5rem]' } transition-all duration-500 relative translate-y-[-11%] flex items-center justify-center h-screen w-full flex-col md:flex-row-reverse gap-2 md:gap-8 lg:gap-20 2xl:gap-40 px-16 lg:px-14`}>
      <img
        className='w-[20rem] rounded-2xl shadow-2xl backdrop-blur-sm md:w-[23rem] lg:w-[24rem] xl:w-[28rem] animate-animatedBorder'
        src={homeLixaun}
        alt="Lixuan"
      />
      <article className='flex flex-col justify-center items-center md:items-start gap-2 mt-4 md:mt-0 md:gap-4'>
        <h1 className='text-[2rem] md:text-[4rem] leading-[2rem] md:leading-[4rem] lg:leading-[2rem] text-gray-600 font-bold'>
          I'm Lixuan
        </h1>
        <h2 className='text-lg md:text-2xl font-semibold text-gray-600/90 md:translate-x-[3px] md:-translate-y-3 lg:translate-y-0'>
          I'm a {' '}
          <TypeAnimation
            sequence={[
              'Photographer.', 3000,
              'Programmer.', 4000,
              'Designer.', 3000,
              () => {},
            ]}
            wrapper="span" cursor={true} repeat={Infinity}
            className='text-lg md:text-2xl font-semibold text-gray-600/90'
          />
        </h2>
        <div className='flex w-full flex-col md:flex-row items-center md:items-start md:-translate-y-3 lg:translate-y-[10px] md:translate-x-[-8px]'>
          <div className='flex translate-y-[-7px] gap-1'>
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
          <NavLink name='About' className='bg-slate-400/30 hover:bg-slate-500/30 md:rounded-lg md:py-1 md:px-2 translate-y-[-6px] ml-4 hidden md:flex md:flex-row-reverse md:gap-2'>
            About Me
          </NavLink>
        </div>
      </article>
    </section>
  )
}

export default Home
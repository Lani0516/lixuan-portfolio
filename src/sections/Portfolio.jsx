import React, { useRef, useLayoutEffect, useState } from 'react'

import { isMobile } from 'react-device-detect'

import {
  useElementOnScreen
} from '../hooks'

import imgOne from '../assets/portfolio/img-1.png'
import imgTwo from '../assets/portfolio/img-2.png'
import imgThree from '../assets/portfolio/img-3.png'


const Portfolio = () => {
  const targetRef = useRef(null)
  const isVisible = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }, targetRef)

  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (targetRef.current) setHeight(targetRef.current.offsetHeight)
    localStorage.setItem('portfolioHeight', height)
  })

  return (
    <section ref={targetRef} className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[10%]' } transition-all duration-500 flex items-center justify-center flex-col flex-wrap md:flex-row gap-6 md:gap-10 bg-white mx-6 pt-8 pb-6 md:px-10 rounded-xl shadow-lg mt-16`}>
      <h1 className='text-[2rem] md:text-[4rem] leading-[2rem] text-gray-600 font-bold md:my-4'>
        Portfolio
      </h1>

      <article className='relative flex flex-col md:flex-row-reverse gap-2 px-8 md:px-12 lg:px-14 items-center'>
        <div className='flex flex-wrap gap-8 items-center justify-center'>
          <PortfolioItem name='資訊科技 | Python自主學習' image={imgOne} altName='pdfOne' />
          <PortfolioItem name='化學探究實作' image={imgTwo} altName='pdfTwo' />
          <PortfolioItem name='物理探究實作' image={imgThree} altName='pdfThree' />
        </div>
      </article>

    </section>
  )
}

const PortfolioItem = ({ name, image, altName }) => {
  const [showName, setShowName] = useState(false)
  const triggers = {
    onMouseEnter: () => setShowName(true),
    onMouseLeave: () => setShowName(false)
  }

  return (
    <div 
      { ...triggers }
      className='md:hover:scale-105 transition-all duration-300 flex flex-col items-center cursor-pointer'
      onClick={() => {
        localStorage.setItem(altName, true)
        window.dispatchEvent( new Event('storage') )
      }}
      >
      <img 
        className='shadow-xl rounded-md md:w-[32rem]'
        src={image}
        alt='portfolio'
        />
      <button
        className={`${!showName && !isMobile ? '-translate-y-[4rem]' : '' } transition-all duration-300 shadow-xl rounded-lg -translate-y-2 px-4 py-3 bg-gray-700/90 text-white relative -z-10 text-center text-sm md:text-lg`}
        >
        {name}
      </button>
    </div>
  )
}

export default Portfolio
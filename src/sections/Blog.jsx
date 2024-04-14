import React, { useRef, useLayoutEffect, useState } from 'react'

import {
  useElementOnScreen
} from '../hooks'

import imgOne from '../assets/portfolio/img-1.png'


const BlogItem = () => {
  return (
    <div className='rounded-lg w-full shadow-xl flex flex-col md:hover:scale-105 transition-all duration-300'>
      <img src={imgOne} className='w-[32rem] shadow-lg' />
      <h1 className='text-[3rem] font-semibold text-gray-600 px-6'>
        WIP
      </h1>
    </div>
  )
}

const Blog = () => {
  const targetRef = useRef(null)
  const isVisible = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }, targetRef)

  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (targetRef.current) setHeight(targetRef.current.offsetHeight)
    localStorage.setItem('blogHeight', height)
  })

  return (
    <section ref={targetRef} className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-10%]' } transition-all duration-500 flex items-center justify-center flex-col gap-8 bg-white mx-6 py-8 rounded-xl shadow-lg mt-16`}>
      <h1 className='text-[2rem] md:text-[4rem] leading-[2rem] text-gray-600 font-bold md:my-4'>
        Blog
      </h1>

      <article className='relative flex flex-row gap-2 md:gap-8 px-16 lg:px-14 items-center'>
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </article>
    </section>
  )
  }

export default Blog
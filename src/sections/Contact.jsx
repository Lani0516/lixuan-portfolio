import React, { useRef } from 'react'

import {
  useElementOnScreen
} from '../hooks'


const Contact = () => {
  const targetRef = useRef(null)
  const isVisible = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }, targetRef)

  return (
    <section ref={targetRef} className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[10%]' } transition-all duration-500 flex items-center justify-center flex-col md:flex-row gap-12 bg-white mx-6 py-8 rounded-xl shadow-lg mt-16`}>
      <h1 className='text-[2rem] md:text-[4rem] leading-[2rem] md:leading-[4rem] lg:leading-[2rem] text-gray-600 font-bold'>
        Contact
      </h1>

      <div className='relative flex flex-col md:flex-row-reverse gap-2 md:gap-24 px-16 lg:px-14 items-center border-l-2'>
        <span>hi</span>

      </div>

    </section>
  )
}

export default Contact
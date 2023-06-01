import React, { useRef, useLayoutEffect, useState } from 'react'

import {
  useElementOnScreen
} from '../hooks'

const data = [
  {
    year: 2013,
    title: '德和國小',
    duration: '6 Years',
    description: 
      '其實這裡我不知道要寫些什麼，所以呢！'
  },
  {
    year: 2018,
    title: '銘傳國中',
    duration: '3 Years',
    description: 
      '你接下來會看到一大堆的廢話，不要讀了。'
  },
  {
    year: 2021,
    title: '市立中崙高中',
    duration: '3 Years',
    description: 
      '認真的啦，你可以停了，都是廢話。'
  },
  {
    year: 2024,
    title: '國立成功大學 電機系',
    duration: '4 Years',
    description: 
      '其實人生可以過的更好的，但你浪費在這了。'
  },
]

const work = [
  {
    year: 2026,
    title: 'Google',
    duration: '2 Years',
    description: 
      '我還是不知道這裡該寫些什麼。'
  },
  {
    year: 2028,
    title: 'Microsoft',
    duration: '4 Years',
    description: 
      '所以就當陳莉軒在18歲，就有了20年的工作經驗吧。'
  },
  {
    year: 2032,
    title: 'Apple',
    duration: '14 Years',
    description: 
      '讚讚！'
  },
]


const About = () => {
  const targetRef = useRef(null)
  const isVisible = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }, targetRef)
  
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (targetRef.current) setHeight(targetRef.current.offsetHeight)
    localStorage.setItem('aboutHeight', height)
  })

  return (
    <section ref={targetRef} className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-10%]' } transition-all duration-500 flex items-center justify-center flex-col md:flex-row gap-6 2xl:gap-24 bg-white mx-6 py-8 rounded-xl shadow-lg px-8 md:px-12 flex-wrap`}>
      <h1 className='text-[2rem] md:text-[4rem] leading-[2rem] text-gray-600 font-bold md:my-4'>
        About
      </h1>

      <div className='flex flex-col md:flex-row gap-4 xl:gap-0 xl:items-center'>
        <article className='p-4 mx-6'>
          {data.map((item, idx) => {
            return (
              <AboutItem
                title={item.title}
                year={item.year}
                duration={item.duration}
                description={item.description}
                />
              )})}
        </article>

        <article className='p-4 mx-6 border-t-2 border-dashed md:border-none -translate-y-3 md:translate-y-0'>
          {work.map((item, idx) => {
            return (
              <AboutItem
                title={item.title}
                year={item.year}
                duration={item.duration}
                description={item.description}
                />
              )})}
        </article>
      </div>
    </section>
  )
}
const AboutItem = ({ year, title, duration, description }) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-slate-200 sclae-90'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-slate-300 rounded-full mt-1.5 -left-1.5 border-white' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 p-1 font-semibold text-white bg-slate-600 rounded-md'>
            {year}
          </span>
          <span className='text-lg font-semibold text-slate-600'>
            {title}
          </span>
          <span className='my-1 text-sm font-normal text-slate-300 leading-none'>
            {duration}
          </span>
        </p>
        <p className='my-2 text-base font-normal text-slate-500'>
          {description}
        </p>
      </li>
    </ol>
  )
}

export default About

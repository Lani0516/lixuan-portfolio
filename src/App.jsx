import React, { useEffect } from 'react'

import homeBg from './assets/home-bg.png'

import {
  TopNav, Footer, PDFViewer
} from './components'
import {
  Home, About, Portfolio, Blog, Contact
} from './sections'


function App() {
  localStorage.clear()

  return (
    <React.Fragment>
      <img 
        className='absolute top-0 left-0 w-full h-screen object-cover object-top transition-all shadow-xl'
        src={homeBg}
        alt="Background-Image"
      />
      <div className='absolute top-0 left-0 w-full h-screen bg-slate-200/50 hidden md:block rounded-[1rem] scale-y-[96%] scale-x-[94%] lg:scale-x-[95%] xl:scale-x-[96%] 2xl:scale-x-[97%] shadow-lg backdrop-blur-md' />
      
      <PDFViewer />

      <TopNav />
      <div className='translate-y-[4rem] md:translate-y-[6rem]'>
        <main className='overflow-hidden pb-6'>
          <Home />
          <About />
          <Portfolio />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
      
    </React.Fragment>
  )
}

export default App

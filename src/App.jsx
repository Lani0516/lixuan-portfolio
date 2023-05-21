import { Route, Routes } from 'react-router-dom'

import TopNav from './components/TopNav.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import Blog from './Pages/Blog.jsx'
import Contact from './Pages/Contact.jsx'

function App() {
  return (
    <>
      {/* Background */}
      <img className='absolute top-0 left-0 w-full h-screen object-cover object-top' src="https://cdn.discordapp.com/attachments/1082556898399756288/1100806433089540238/home-image.png" alt="Background-Image" />
      <div className='absolute top-0 left-0 w-full h-screen bg-white/30 scale-[97%] 2xl:scale-x-[98%] rounded-3xl hidden md:block backdrop-blur-sm shadow-xl' />

      <TopNav />

      <div className='absolute top-0 left-0 w-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

    </>
  )
}

export default App

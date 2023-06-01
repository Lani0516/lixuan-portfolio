import React, { useRef } from 'react'


const NavLink = ({ name, toggle, className, children }) => {
  const windowHeight = useRef(window.innerHeight).current
  const aboutHeight = Number(localStorage.getItem('aboutHeight')),
        portfolioHeight = Number(localStorage.getItem('portfolioHeight')),
        blogHeight = Number(localStorage.getItem('blogHeight'))

  let height
  switch (name) {
    case 'About': {
      height = windowHeight
      break
    }
    case 'Portfolio': {
      height = windowHeight + aboutHeight
      break
    }
    case 'Blog': {
      height = windowHeight + aboutHeight + portfolioHeight
      break
    }
    case 'Contact': {
      height = windowHeight + aboutHeight + portfolioHeight + blogHeight
      break
    }
    default: {
      height = 0
      break
    }
  }

  return (
    <li
      onClick={() => {
        toggle ? toggle() : ''
        window.scrollTo({
          top: height,
          behavior: 'smooth'
        })
      }}
      className={`${className} text-md text-gray-700 font-medium cursor-pointer`}
      >
      {children ? children : name}
    </li>
  )
}

export default NavLink
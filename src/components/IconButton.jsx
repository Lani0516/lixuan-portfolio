import React from 'react'


const IconButton = ({ href, children }) => {
  return (
    <a
      href={href}
      className='text-xl cursor-pointer text-gray-600 hover:bg-cyan-900/20 box-content p-[0.5rem] rounded-full'
      >
      {children}
    </a>
  )
}

export default IconButton
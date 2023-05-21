import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <Link to={props.href} onClick={props.onClick} className={props.className}>
			<div className='border-b-2 border-gray-800/60 cursor-pointer hover:shadow-md'>
				{props.children}
			</div>
    </Link>
  )
}

export default Button
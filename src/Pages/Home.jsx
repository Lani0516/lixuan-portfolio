import React from 'react'
import Button from '../components/Button';
import { TypeAnimation } from 'react-type-animation';

import { FaGoogleDrive, FaInstagram, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen'>

      <div className='relative flex flex-col md:flex-row-reverse gap-2 md:gap-24 px-16 lg:px-14 items-center'>
          
        <img className='w-[20rem] rounded-2xl shadow-2xl backdrop-blur-sm md:w-[23rem] lg:w-[24rem] xl:w-[28rem] animate-animatedBorder' src="https://cdn.discordapp.com/attachments/1082556898399756288/1101724880807923752/555.png" alt="Lixuan" />

        <div className='flex flex-col justify-center items-center md:items-start gap-2 mt-4 md:mt-0 md:gap-4'>
          <h1 className='text-[2rem] md:text-[4rem] leading-[2rem] md:leading-[4rem] lg:leading-[2rem] text-gray-600 font-bold'>
            I'm Lixuan
          </h1>
          <p className='text-lg md:text-2xl font-semibold text-gray-600/90'>
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
          </p>

          <div className='flex gap-3 w-full flex-col md:flex-row items-center md:items-start'>
            <div className='flex text-xl md:text-2x gap-3 text-gray-600'>
              <a href=''><FaInstagram className='hover:shadow-md' /></a>
              <a href=''><FaGithub className='hover:shadow-md' /></a>
              <a href=''><FaGoogleDrive className='hover:shadow-md' /></a>
            </div>
            <Button href='/about' className='translate-y-[-3px] ml-4 hidden md:block'>
              About Me
            </Button>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default Home
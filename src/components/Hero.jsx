import React from 'react'
// import HeroImage from '../assets/hero-image.png'
import Type from './Type'
import { IconCloudDemo } from './IconCloudDemo'
import Socials from './Socials'
import Resume from './Resume'

const Hero = () => {
  return (
    <div className='c text-white text-center py-6 px-8'>
      <div className='flex gap-10 flex-row justify-center  items-center'>
        <div className=''>
          <h1 className='text-3xl font-bold text-left'>Hi there</h1>
          <h1 className='text-4xl font-bold text-left'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Ganesh M </span>
            ,
            <Type />
          </h1>
          <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
          </p>
          <div className='mt-5 flex justify-start items-center gap-3'>
            <Socials />
            {/* <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'> <a href={resume} target=''>Resume</a></button> */}
            <Resume/>
          </div>
        </div>
        <div className="hidden md:block  md:w-1/2 relative">
          <IconCloudDemo />
        </div>
      </div>
      {/* <div className='mt-4 space-x-4'> */}
        {/* <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'> <a href="#contact">Contact With Me</a> </button> */}

      {/* </div> */}
      {/* <div>
      </div> */}
    </div>
  )
}

export default Hero
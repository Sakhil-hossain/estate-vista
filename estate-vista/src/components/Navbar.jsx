
import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>

      {/* Desktop Navbar */}
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>

        <img src={assets.logo} alt='Logo' />

        <ul className='hidden md:flex space-x-6 text-white font-medium'>
          <a href='#Header' className='cursor-pointer hover:text-amber-300'>Home</a>
          <a href='#about' className='cursor-pointer hover:text-amber-300'>About</a>
          <a href='#Projects' className='cursor-pointer hover:text-amber-300'>Projects</a>
          <a href='#Testimonials' className='cursor-pointer hover:text-amber-300'>Testimonials</a>
        </ul>

        <button className='hidden md:block bg-white text-black px-4 py-2 rounded-3xl border-2 hover:bg-blue-600 hover:text-white'>
          Sign Up
        </button>

        {/* Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt='Open Menu'
          className='md:hidden w-6 h-6 cursor-pointer'
        />

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 z-20 bg-white overflow-hidden transition-all duration-300 ${
          showMobileMenu ? 'w-full' : 'w-0'
        }`}
      >

        {/* Close Icon */}
        <div className='flex justify-end p-4 cursor-pointer'>
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className='w-6'
            alt='Close Menu'
          />
        </div>

        {/* Mobile Navigation Links */}
        <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>

          <a onClick={() => setShowMobileMenu(false)} href='#Header' className='px-4 py-2 rounded-full'>
            Home
          </a>

          <a onClick={() => setShowMobileMenu(false)} href='#about' className='px-4 py-2 rounded-full'>
            About
          </a>

          <a onClick={() => setShowMobileMenu(false)} href='#Projects' className='px-4 py-2 rounded-full'>
            Projects
          </a>

          <a onClick={() => setShowMobileMenu(false)} href='#Testimonials' className='px-4 py-2 rounded-full'>
            Testimonials
          </a>

        </ul>

      </div>

    </div>
  )
}

export default Navbar

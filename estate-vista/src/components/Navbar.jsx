import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className = ' absolute top-0 left-0 w-full z-10'>
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
            <img src={assets.logo} alt=''/>
            <ul className=' hidden md:flex space-x-6 text-white font-medium'>
                <a className='cursor-pointer hover:text-amber-300 '> Home</a>
                <a className='cursor-pointer hover:text-amber-300'> About </a>
                <a className='cursor-pointer hover:text-amber-300'> Projects</a>
                <a className='cursor-pointer hover:text-amber-300'> Testimonials</a>
            </ul>
            <button className= ' hidden md:block bg-white-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Sign Up</button>

        </div>
      
    </div>
  )
}

export default Navbar

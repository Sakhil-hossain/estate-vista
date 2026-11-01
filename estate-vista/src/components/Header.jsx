import React from 'react'
import Navbar from './Navbar'
import header_img from '../assets/header_img.png'

const Header = () => {
  return (
    <div
      className='min-h-screen bg-cover bg-center w-full overflow-hidden'
      style={{ backgroundImage: `url(${header_img})` }}
      id='Header'
    >
      <Navbar />

      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white my-50'>
        <h2 className='text-5xl font-bold sm:text-6xl md:text-[82px] inline-block 
        max-w-3xl font-semibold pt-20'>Explore Home that fit your dream!!</h2>
        <div className="space-x-6 mt-16">
          <a className='border text-1xl border-white px-8 py-3 rounded-2xl font-bold hover:bg-amber-400 ' href="#projects">Projects</a>
          <a className='border text-1xl border-white px-8 py-3 rounded-2xl font-bold hover:bg-amber-400' href="#contract">Contract Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header   
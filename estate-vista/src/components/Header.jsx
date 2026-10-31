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
    </div>
  )
}

export default Header   
import React from 'react'
import Diamond from '../assets/hero-image.png';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={Diamond} className="bg-cover bg-center" alt='img' />
    </div>
  </div>
  )
}

export default Hero
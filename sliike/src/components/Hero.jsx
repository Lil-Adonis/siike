import React from 'react'
import Diamond from '../assets/hero-image.png';

const Hero = () => {
  return (
 <div className="hero min-h-screen bg-base-200">
    <div className="w-full h-full bg-cover bg-center flex-col lg:flex-row-reverse"><img src={Diamond} className="" alt='img' /></div>
      <div className="card w-96 bg-indigo-200 text-primary-content">
        <div className="card-body">
          <h6 className="text-stone-900">New Arrival</h6>
          <h2 className="card-title text-indigo-900">Discover Our <br></br> New Collection</h2>
          <p className="text-stone-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="card-actions  justify-start">
          <button className="btn bg-blue-900">Buy Now</button>
        </div>
      </div>
</div>
    </div>
  )
}

export default Hero
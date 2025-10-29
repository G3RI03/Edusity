import React from 'react'
import './hero.css'
import Arrow from '../../assets/Arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
    <div className="hero-text">
        <h1>We ensure better eduaction for a better world</h1>
        <p>Our cutting ede curriculum is designed to empower students with the knowledge,skills, and experiences need to excel in the dynamic field of eduaction</p>
        <button className='btn'>Explore more <img src={Arrow} alt="" /> </button>
    </div>
    </div>
  )
}

export default Hero
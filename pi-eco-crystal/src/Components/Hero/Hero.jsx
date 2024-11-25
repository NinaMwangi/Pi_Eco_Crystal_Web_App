import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Recycling helps protect our planet, Everyone should do it.</h1>
            <p>Recycling is the foundation of our waste management model.</p>
            <button className='btn'>More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
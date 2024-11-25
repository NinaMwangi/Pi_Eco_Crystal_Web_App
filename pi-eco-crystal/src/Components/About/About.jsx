import React from 'react'
import './About.css'
import about_img from '../../assets/About.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play_icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT PI ECO CRYSTAL</h3>
            <h2>We give glass waste a second life.</h2>
            <p>Fairly sourced recycled glass, processed into high quality products for local and international markets</p>
            <p>Leveraging technology to manage and streamline operations in an emerging market context</p>
            <p> We recycle as much glass waste as possible and reduce everyone’s environmental footprint reliably and conveniently.</p>
        </div>
    </div>
  )
}

export default About
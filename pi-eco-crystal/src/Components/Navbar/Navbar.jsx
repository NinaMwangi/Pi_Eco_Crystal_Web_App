import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className='container'>
       <img src={logo} alt="" className='logo' />
       <ul className={mobileMenu? '':'hide-mobile-menu'}>
        <li><Link to='hero'smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='recycles'smooth={true} offset={-260} duration={500}>Recycle</Link></li>
        <li><Link to='about'smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='process'smooth={true} offset={-260} duration={500}>How to Recycle</Link></li>
        <li><Link to='Map'smooth={true} offset={-260} duration={500}>Where to Recycle</Link></li>
        <li><Link to='Login'smooth={true} offset={-260} duration={500}>Login</Link></li>
        <li><Link to='contact'smooth={true} offset={-260} duration={500}className='btn'>Contact Us</Link></li>
       </ul>
       <img src={menu_icon} alt=""className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
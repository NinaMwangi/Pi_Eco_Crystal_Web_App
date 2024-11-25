import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Recycle from './Components/Recycle/Recycle'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Process from './Components/Process/Process'
import Map from './Components/Map/Map'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Recycling Options' title='What We Offer'/>
        <Recycle/>
        <About/>
        <Title subTitle='How to Recycle' title='Recycling Process'/>
        <Process/>
        <Title subTitle='Where to Recycle' title='Find the Closest Facility'/>
        <Map/>
        <Login/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
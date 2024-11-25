import React from 'react'
import './Process.css'
import process_img from '../../assets/process.jpg'

const Process = () => {
  return (
    <div className='process'>
        <div className="process-left">
            <img src={process_img} alt="" className='process-img' />
        </div>
        <div className="process-right">
            <h2>Step by Step Guide</h2>
            <p>1. Sort out your waste at home and separate glass waste from other waste material.</p>
            <p>2. Use our location finder to find the closest glass recycling facility to you.</p>
            <p>3. Visit the collection center and drop off your glass waste.</p>
            <p>4. Choose one of the options we offer as an outcome product for your recycled waste.</p>
            <p>5. Collect finished products after 3 working days.</p>
        </div>
    </div>
  )
}

export default Process
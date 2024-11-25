import React from 'react'
import './Recycle.css'
import Art from '../../assets/Art.jpg'
import Vase from '../../assets/Vase.jpg'
import Mosaic from '../../assets/Mosaic.jpg'
import Creativity from '../../assets/creativity.png'
import Jade from '../../assets/jade.png'
import mosaic1 from '../../assets/mosaic1.png'

const Recycle = () => {
  return (
    <div className='recycles'>
        <div className="recycle">
            <img src={Art} alt="" />
            <div className="caption">
                <img src={Creativity} alt="" />
                <p>Make Art</p>
            </div>
        </div>
        <div className="recycle">
            <img src={Vase} alt="" />
            <div className="caption">
                <img src={Jade} alt="" />
                <p>Make Vases</p>
            </div>
        </div>
        <div className="recycle">
            <img src={Mosaic} alt="" />
            <div className="caption">
                <img src={mosaic1} alt="" />
                <p>Make Mosaics</p>
            </div>
        </div>
    </div>
  )
}

export default Recycle
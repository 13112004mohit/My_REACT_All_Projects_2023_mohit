import React from 'react'
import '../style/herosection.css'
import '../style/animation.css'
import { NavLink } from 'react-router-dom'

const Herosection = (props) => {
  return (
    <>
    <div className='heromaindv'>
        <div className='herofdv'>
             <p>WELCOME TO</p>
              <h1 className='herohon'>{props.heading}</h1>
              <p className='herocontent'>{props.content}</p>
              <NavLink to={'/product'}>
                <button className='animated-button'>
                  <span>{props.btn}</span>
                </button>
              </NavLink>
        </div>
    
        <div className='herosdv'>
            <img className='imgz' src={props.image} alt="" />
        </div>
    </div>
    </>
  )
}

export default Herosection;

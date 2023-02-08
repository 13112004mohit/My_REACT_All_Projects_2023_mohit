import React from 'react'
import '../style/herosection.css'

const Herosection = (props) => {
  return (
    <>
    <div className='heromaindv'>
        <div className='herofdv'>
             <p>WELCOME TO</p>
              <h1 className='herohon'>{props.heading}</h1>
              <p className='herocontent'>{props.content}</p>
              <button>{props.btn}</button>
        </div>
    
        <div className='herosdv'>
            <img className='imgz' src={props.image} alt="" />
        </div>
    </div>
    </>
  )
}

export default Herosection;

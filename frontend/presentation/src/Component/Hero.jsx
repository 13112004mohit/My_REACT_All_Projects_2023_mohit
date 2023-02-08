import React from 'react'
import './Hero.css'
import Typerwriter from 'typewriter-effect'

// import kajaldiimg from '../About/kajaldi.jpeg'
const siz1 = {
    '--i': '1'
  }
  const siz2 = {
    '--i': '2'
  }
  const siz3 = {
    '--i': '3'
  }
  const siz4 = {
    '--i': '4'
  }
const Hero = () => {
 
    return (
        <>
            <div className="container">

                <div class="containerR1">
                    <div class="ring"></div>
                    <div class="ring"></div>
                    <div class="ring"></div>
                </div>
                <div class="containerR">
                    <div class="ring"></div>
                    <div class="ring"></div>
                    <div class="ring"></div>
                </div>

                <h1 className='Heroh1'>presentation<span className="mechHero">
                <Typerwriter
                  options={{
                    autoStart:true,
                    loop:true,
                    delay:30,
                    strings:["MECHANICAL","& AutoMobile"],
                  
                  }}
                />
                    </span> </h1>


                    <div className='cube'>
            <div className='top'></div>
            <div>
              {/* <img className='Aimg' src={kajaldiimg} alt="img" /> */}
              <span style={siz1} ></span>
              <span style={siz2} ></span>
              <span style={siz3} ></span>
              <span style={siz4} ></span>
            </div>
          </div>
            </div>
        </>
    )
}

export default Hero;

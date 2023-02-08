import React from 'react'
import './Home.css'
import HeroSection from '../Component/Hero'
import Vdoimg from '../Component/TwoFrame'
import cottervdo from './cotter.mp4'
import cotterimg from './cotter.jpg'
import cotterspefi from './cotterspefi.jpg'
import dott from './dott.png'

const Home = () => {
  return (
    <>
     <div className="hpage">
          <HeroSection/>

          <Vdoimg vdosrc={cottervdo} imgsrc={cotterimg}/>

          <div className="linewise">
            <h1 className='whatish1'><img className='Ques' src="https://cdn-icons-png.flaticon.com/512/3240/3240848.png" alt="" /> What is Cotter Joint</h1>

            <div className="Stline">
                <div data-aos-duration='1000' data-aos="fade-down-left" className="paira">
                <div className="dott1"><div className="dott2"><div className="dott3"></div></div></div>
                    <p className='pairagraf'>Cotter joints are the joints made with the help of cotter.</p>
                </div>
                <div data-aos-duration='1000' data-aos="fade-left" className="paira">
                <img className='cotterStrimg' src={cotterspefi} alt="" />
                <div className="dott1"><div className="dott2"><div className="dott3"></div></div></div>
                    <p className='pairagraf'>Cotter joint is a flat wedge shaped piece of steel.</p> 
                </div>
                <div data-aos-duration='1000' data-aos="fade-left" className="paira">
                <img className='dottimgs' src={dott} alt="" />
                    <p className='pairagraf'>Cotter is used to connect rigidly two rods which transmit motion in the axial direction, without rotation.</p> 
                </div>
                <div data-aos-duration='1000' data-aos="fade-left" className="paira">
                <img className='dottimgs' src={dott} alt="" />
                    <p className='pairagraf'>These joints may be subjected to tensile or compressive forces along the axes of the rods.</p> 
                </div>
                <div data-aos-duration='1000' data-aos="fade-up" className="paira">
                <img className='dottimgs' src={dott} alt="" />
                    <p className='pairagraf'>Examples of cotter joint connections are: connection of piston rod to the crosshead of a steam engine, valve rod and its stem etc.</p> 
                </div>
                <div data-aos-duration='1000' data-aos="fade-up" className="paira">
                <img className='dottimgs' src={dott} alt="" />
                    <p className='pairagraf'>Cotter joint contains has mainly three components... <br /> <span>1.Socket <br />2.Spigot <br />3.cotter</span></p> 
                </div>
                <div data-aos-duration='1000' data-aos="fade-up" className="paira">
                <img className='dottimgs' src={dott} alt="" />
                    <p className='pairagraf'>In cotter joint there are two pipes having connection with the help of cotter.</p> 
                </div>
                <div data-aos-duration='1000' data-aos="fade-up" className="paira">
                <img className='dottimgs' src={dott} alt="" />
                    <p className='pairagraf'>One of the rods has a socket end into which the other rod is inserted.</p> 
                </div>
                <div data-aos-duration='1000' data-aos="flip-left" className="paira">
                <img className='dottimgs' src={dott} alt="" />
                    <p className='pairagraf'>The cotter is driven into a slot, made in both the socket and the rod. The cotter tapers in width (usually 1:24) * on one side of it.</p> 
                </div>
       
            </div>
          </div>
           
           {/* Application of cotter joint */}

           <div className="Appcotterjoint">
              <h1 className='Appcoh1'>Application of Cotter Joint</h1>
              <div className="boxes">
                    <div data-aos-duration='1000' data-aos="fade-down-right" class="box">
                       <p>Joint between the piston rod and the cross head of a steam engine.</p>
                     </div>
                     <div data-aos-duration='1000' data-aos="fade-down-left" class="box">   
                       <p>Joint between the slide spindle and the fork of valve mechanism.</p>
                     </div>
                     <div data-aos-duration='1000' data-aos="fade-up-right" class="box">
                       <p>Joint between the piston rod and the tail and pump rod</p>
                     </div>
                     <div data-aos-duration='1000' data-aos="fade-up-left" class="box">
                       <p>Foundation bolt</p>
                     </div>
              </div>
           </div>

          
     </div>
    </>
  )
}

export default Home;
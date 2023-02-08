import React from 'react'
import TwoFrame from '../Component/TwoFrame';
import knucklevdo from './knuckle.mp4'
import './knuckle.css'
import Quesimg from './question.png'
import leftA from './left.png'
import rightA from './right.png'
import knulimgs from './knl.jpg'

const arrow = 'https://cdn-icons-png.flaticon.com/128/8245/8245666.png'
const Knuckle = () => {
  return (
    <>
         <TwoFrame vdosrc={knucklevdo} imgsrc="https://5.imimg.com/data5/CE/WF/MY-29828564/knuckle-joint-model-500x500.jpg"/>
         
         <div className="knudivMain">
             <h1 className='whatknuh1'><img className='ques' src={Quesimg} alt="" /> What is Knuckle Joint</h1>

             <div className="pairaK">
                   <div data-aos-duration='1000' data-aos-offset="100" data-aos="fade-down-right" className="WhknujL">
                    <img src={leftA} alt="" />
                    <p className='pairagraKL1'>The Knuckle Joint is used too connect two rods under tensile load.</p>
                   </div>
                   <div data-aos-duration='1000'  data-aos="fade-down-left" className="WhknujR">
                    <img src={rightA} alt="" />
                    <p className='pairagraKR1'>This Joint permits angular mislignment of the rods and may take compressive load if it is guided.</p>
                   </div>
                   <div data-aos-duration='1000' data-aos-offset="160"  data-aos="fade-down-right" className="WhknujL">
                    <img src={leftA} alt="" />
                    <p className='pairagraKL2'>These Joints are used for different types of connections e.g. tie rods, tension links in bridge structure. In this, one of the rods has an eye at the rod end and,</p>
                   </div>
                   <div data-aos-duration='1000'  data-aos="fade-down-left" className="WhknujR">
                    <img src={rightA} alt="" />
                    <p className='pairagraKR2'>The other one is forked with eyes at both the legs. A pin (Knuckle pin) is inserted through the rod-end eye and fork-end eyes and is secured by a collar and a split pin.</p>
                   </div>
                   <div data-aos-duration='1000'  data-aos="fade-down-right" className="WhknujL">
                    <img src={leftA} alt="" />
                    <img className='knlimgset' src={knulimgs} alt="" />
                   </div>
                </div>

         {/* Application of knuckle */}
         <h1 className='whatknuh1'><img className='ques' src={Quesimg} alt="" /> Application of Knuckle Joint</h1>
             <div className="Appknudiv">
              <p data-aos="fade-right" ><img alt='img' className='arrowimg' src={arrow}/> Joints between the tie bars in a roof trusses.</p> <hr />
              <p data-aos="fade-left"  ><img alt='img' className='arrowimg' src={arrow}/>Between the links of suspension bridge.</p>  <hr />
              <p data-aos="fade-right" ><img alt='img' className='arrowimg' src={arrow}/>In valve mechanism of a reciprocating engine.</p> <hr />
              <p data-aos="fade-left"  ><img alt='img' className='arrowimg' src={arrow}/>Fulcrum for the levers.</p>  <hr />
              <p data-aos="fade-right" ><img alt='img' className='arrowimg' src={arrow}/>Joints between teh links of a bicycle chain.</p> 
             </div>
         </div>

          

   </>
  )
}

export default Knuckle;

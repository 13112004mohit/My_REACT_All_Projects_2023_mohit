import React from 'react'
import './twoframe.css'

const TwoFrame = (props) => {
  return (
    <>
    <div className="twofrm">
        <div  className="vdodiv">
           <video  data-aos-offset="430"   data-aos-delay="10"  data-aos-duration='1000' data-aos='zoom-in' className='vdocotter' autoPlay loop muted> <source src={props.vdosrc} type="video/mp4"/> </video>
           </div>

           <div className="imgdiv">
           <img  data-aos-offset="230"   data-aos-delay="10" data-aos-duration='1000' data-aos='fade-left' className='imgsrc' src={props.imgsrc} alt="" /> 
           </div>
     </div>
    </>
  )
}

export default TwoFrame;

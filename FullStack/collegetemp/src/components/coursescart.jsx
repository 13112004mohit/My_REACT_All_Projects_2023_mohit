import React from 'react'
import '../style/crasole2.css';
import '../style/animation.css'
import {IoIosArrowForward} from 'react-icons/io'
import { NavLink } from 'react-router-dom';

const coursescart = (props) => {
  return (
    <>
          <div class="courses_item_cart ">
               <div className="thumb_fix_img_con">
                       <img  src={props.image} alt="" /> 
               </div>
               <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/courses'} >
               <div className="courses_content_con">                                    
                   <div className="catelog "> {props.cat}</div>
                    <h3>{props.heading}</h3>  
                    <p>{props.content}</p>
                    <button style={{backgroundColor:'transparent',padding:'.1rem 0rem',marginTop:'1rem',color:'#ff2a00',fontSize:'.7rem'}} className="animated-button">
                       <span>Read More <IoIosArrowForward  style={{backgroundColor:'transparent',padding:'.1rem 0rem',marginTop:'-.2rem',color:'#ff2a00',fontSize:'1.2rem'}} id='forward_icon'/></span>
                    </button>
               </div>
               </NavLink>
          </div>

    </>
    
  )
}

export default coursescart
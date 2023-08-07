import React from 'react'
import '../style/Courses_cart.css';
import '../style/animatedbutton.css'
import { NavLink } from 'react-router-dom';

const Courses_Cart = (props) => {
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
              <hr id='hr'/>
                   <div className="authornn">
                        <div class="imgbox_con">
                          <img src={props.authorimg}alt=""/>
                        </div>
                        <div class="content_under_box">
                          <p class="workof_custmors">Conduct by:</p>
                          <h3 class="h3_name_custmors">{props.authorname}</h3>
                        </div>
                    </div>
               </div>
               </NavLink>
          </div>

    </>
  )
}

export default Courses_Cart
import React from 'react'
import '../style/blog_cart.css'
import {FaCalendarCheck} from 'react-icons/fa'


const blog_cart = (props) => {
  return (
    <>
        <div className="blog_m_con">
              <div className="blog_img_box">
                   <img src={props.image} alt="" />
              </div>
              <div className="blog_content_box">
                 <p className="date">
                         <FaCalendarCheck id='calendericn'/>
                         <span>{props.date}</span>
                 </p>
                 <h1>{props.heading}</h1>
                 <div className="towbox_con_blog">
                         <p className="fst_blog">{props.category}</p>
                         <div className="imgcon">
                                 <img src={props.authorimg} alt="" />
                         </div>
                 </div>
              </div>
        </div>  
   </>
  )
}

export default blog_cart
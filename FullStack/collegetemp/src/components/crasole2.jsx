import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {IoIosArrowForward} from 'react-icons/io'
import { NavLink } from 'react-router-dom';
import Data from './coursesdata'
import Cart from './coursescart'




const Carsole2 = () => {
        const responsive = {
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1460 },
            items: 4
          },
          desktop: {
            breakpoint: { max: 1460, min: 1100 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1100, min: 614 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 614, min: 0 },
            items: 1
          }
             
              };
              const setting={
                autoPlay:true,
                swipeable:true,
                draggable:true,
                autoPlaySpeed:2000,
                infinite:true,
                slidesToShow: 1,
                slidesToScroll:1,
                keyBoardControl:true,
                transitionDuration:1000,
                removeArrowOnDeviceType:["desktop","tablet", "mobile"],
               
               } 
  return (
    <>
    <section className="center_container">
      <div className="galler7_component_F_con">
             <div className="_under_gallery_component_F_con">
               <h1 id='gallery_compo_h1'>Graduate Programs</h1>
               <p  id='gallery_compo_p' >Our college & Aluminai's Images </p>
             </div>

             <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/courses'} >
                <button style={{backgroundColor:'transparent'}} className="animated-button">
                   <span className="animated-button_white">all courses <IoIosArrowForward id='forward_icon'/></span>
                </button>
             </NavLink>
      </div> 
      <div data-aos-duration='1000' data-aos='fade-up' className="carsole2_con">
      <Carousel  {...setting} responsive={responsive}>

       {
        Data.map((e,i)=>(
          <Cart
             image={e.image}
             heading={e.heading}
             content={e.content}
             cat={e.category}
          />
        ))
       }

        </Carousel>
      </div>
      </section>
    </>
  )
}

export default Carsole2

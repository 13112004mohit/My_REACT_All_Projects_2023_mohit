import React from 'react'
import '../style/Courses_cart.css';
import '../style/animatedbutton.css'
import { NavLink } from 'react-router-dom';
import { serverimg } from '../server';

const Services_Cart = (props) => {
  return (
    <>
        <div class="image-box">
                  <img id="img"  src={`${serverimg}/${props.image}`} alt="Image"/>
                  <div class="overlay1 ">
                          <p> {props.heading}</p>
                  </div>
                  <div class="overlay">
                     <p>{props.description}</p>
                  </div>
          </div>

    </>
  )
}

export default Services_Cart
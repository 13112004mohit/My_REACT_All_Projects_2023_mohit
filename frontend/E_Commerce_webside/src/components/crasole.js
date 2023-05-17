import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import Carousels from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carsole.css';
import '../style/carsole.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import gest1 from '../assets/slider01.jpg';
import gest2 from '../assets/slider02.jpg';
import gest3 from '../assets/slider03.jpg';
import gest4 from '../assets/slider04.jpg';
import gest5 from '../assets/slider05.jpg';

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowBack className='carsole_arrow' />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowForward className='carsole_arrow' />
    </div>
  );
};

const Carsole1 = () => {

        // for pause and leave screen for read & watch content
  const [autoplay, setAutoplay] = useState(true);
  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };


  return (
    <>
      <div className="carsole_first_con">
        <Carousels
          fade={true}  
          autoplay={autoplay}
          autoplaySpeed={40000}
          arrows={true}
          dots={true}
          infinite={true}
          speed={1400}
          slidesToShow={1}
          slidesToScroll={1}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          customPaging={(i) => {
            return (
              <div>
                {i}
              </div>
            )
          }}
          responsive={[
                {
                  breakpoint: 768, // adjust as needed for other many devices
                  settings: {
                    arrows: false,
                    dots: false
                  }
                }
              ]}
          dotsClass="slick-dots custom-indicator"
          onClick={toggleAutoplay}
        >
          <div className="carsole_images_con">
             <img className='carsole_imgs' src={gest1} alt="our_members" />
              <div className="content1_carousel1">
                 <h1 className="carousel1_first_h1">valuable price</h1>
                 <p className="carousel1_first_p">purchese your online product in minutes with the professionally and lovingly designed REEN website template. Customize your site with versatile and easy to use features.</p>
                 <div className="carousel1_btn-ra">
                  <NavLink to={'/product'}> <button className="carousel1_btn "> Get started now </button></NavLink>
                 </div>
             </div>
          </div>

          <div className="carsole_images_con">
            <img className='carsole_imgs' src={gest2} alt="our_members" />
            <div className="content1_carousel1 carousel1_right">
                 <h1  className="carousel1_first_h1 tpb">Perfect and </h1>
                 <h1 className="carousel1_first_h1">beautiful design</h1>
                 <p className="carousel1_first_p whitepclr">Cara is wonderful shopping app to showcase your best put your items in the fore. Professionally use of typography and layout that fits your content.</p>
                 <div className="carousel1_btn-ra">
                 <NavLink to={'/product'}> <button className="carousel1_btn "> Get started now </button></NavLink>
                 </div>
             </div>
          </div>

          <div className="carsole_images_con">
            <img className='carsole_imgs' src={gest3} alt="our_members" />
            <div className="content1_carousel1 carousel1_left_">
                 <h1 className="carousel1_first_h1 darkh1bgc tpb">Free and </h1>
                 <h1 className="carousel1_first_h1 darkh1bgc">good shippeing </h1>
                 <p className="carousel1_first_p">The clean code allows you to easily copy code blocks from content modules and past them in different places or layouts.</p>
                 <div className="carousel1_btn-ra">
                 <NavLink to={'/product'}> <button className="carousel1_btn "> Get started now </button></NavLink>
                 </div>
             </div>
          </div>

          <div className="carsole_images_con">
            <img className='carsole_imgs' src={gest4} alt="our_members" />
            <div className="content1_carousel1 carousel1_right">
                 <h1 className="carousel1_first_h1 darkh1bgc tpb">Just focus on</h1>
                 <h1 className="carousel1_first_h1 darkh1bgc">your need </h1>
                 <p className="carousel1_first_p whitepclr">Take a break from messing around with heavy coding and spend your time brainstorming ideas for your next project.</p>
                 <div className="carousel1_btn-ra">
                 <NavLink to={'/product'}> <button className="carousel1_btn "> Get started now </button></NavLink>
                 </div>
             </div>
          </div>

          <div className="carsole_images_con">
            <img className='carsole_imgs' src={gest5} alt="our_members" />
            <div className="content1_carousel1">
                 <h1 className="carousel1_first_h1">Showcase our productivity </h1>
                 <p className="carousel1_first_p">With cara you have the possibility to create login id and sell or buy for various contents quickly and easily. Now it's up to you!</p>
                 <div className="carousel1_btn-ra">
                 <NavLink to={'/product'}> <button className="carousel1_btn "> Get started now </button></NavLink>
                 </div>
             </div>
          </div>

        </Carousels>
      </div>
    </>
  )
}

export default Carsole1

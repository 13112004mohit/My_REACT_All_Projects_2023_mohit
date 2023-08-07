import React from 'react'
import Carousel from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {RiArrowRightSLine,RiArrowLeftSLine} from 'react-icons/ri'
import '../style/CustmCraousel1.css'
import '../style/Craousel1.css'


import gest1 from '../assets/crasole1.png';
import gest2 from '../assets/crasole2.png';
import gest3 from '../assets/crasole1.png';
import gest4 from '../assets/crasole2.png';
import gest5 from '../assets/crasole1.png';
import gest6 from '../assets/crasole2.png';


const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <RiArrowLeftSLine className='carsole_arrow' />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <RiArrowRightSLine className='carsole_arrow' />
    </div>
  );
};

const Craousel = () => {


  return (
    <>

     <div className='carsousel1_m_con'>
     <Carousel 
      fade={true}  
          autoplay={true}
          autoplaySpeed={2000}
          arrows={true}
          dots={false}
          infinite={true}
          speed={1000}
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
           >
        <div class="Acard">
               <img src={gest1} alt="reception" />   
        </div>
        <div class="Acard">
               <img src={gest2} alt="reception" />   
        </div>
        <div class="Acard">
               <img src={gest3} alt="reception" />  
        </div>
        <div class="Acard">
               <img src={gest4} alt="reception" />   
        </div>
        <div class="Acard">
               <img src={gest5} alt="reception" />  
        </div>
        <div class="Acard">
               <img src={gest6} alt="reception" />
        </div>
      </Carousel>
     </div>

    </>
  )
}

export default Craousel
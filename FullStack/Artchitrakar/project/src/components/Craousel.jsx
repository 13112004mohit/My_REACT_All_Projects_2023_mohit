import React from 'react'
import Carousel from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {RiArrowRightSLine,RiArrowLeftSLine} from 'react-icons/ri'
import '../style/CustmCraousel1.css'
import '../style/Craousel1.css'


import { useSelector } from 'react-redux';
import { serverimg } from '../server';


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
  const {hero } = useSelector(
    (state) => state.admin
  );

  return (
    <>

     <div className='carsousel1_m_con'>
     <Carousel 
      fade={true}  
          autoplay={true}
          autoplaySpeed={4000}
          arrows={false}
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
        {hero && hero.hero.map((data)=>(
        <div class="Acard">
               <img src={`${serverimg}/${data.image}`} alt="reception" />   
        </div>
        ))}
      </Carousel>
     </div>

    </>
  )
}

export default Craousel
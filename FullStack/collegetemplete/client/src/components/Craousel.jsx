import React from 'react'
import Carousel from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {RiArrowRightSLine,RiArrowLeftSLine} from 'react-icons/ri'
import '../style/CustmCraousel1.css'
import '../style/Craousel1.css'


const gest1 = "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600";
const gest2 = "https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=600";
const gest3 = "https://images.pexels.com/photos/8923035/pexels-photo-8923035.jpeg?auto=compress&cs=tinysrgb&w=600";
const gest4 = "https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=600";
const gest5 = "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600";
const gest6 = "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600";


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
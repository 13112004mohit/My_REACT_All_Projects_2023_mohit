import React from 'react';
import '../style/services.css'

const  Services = () => {
  return (
    <>
        <div className="servicesmaindv">
            <div className="serrowone">
                <img className='imgsize' src="https://cdn-icons-png.flaticon.com/128/3306/3306060.png" alt="shipping" />
                <p>Super Fast and Free Dilivery</p>
            </div>
            <div className="serrowtwo">
               <div className='rtcolfirst'><img className='imgsize' src="https://cdn-icons-png.flaticon.com/128/3027/3027591.png" alt="none contact" /> <p>Non-Contact Shippoing</p></div>
               <div className='rtcolfirst'><img className='imgsize' src="https://cdn-icons-png.flaticon.com/128/2534/2534208.png" alt="money back" /><p>Money-back Guaranteed</p></div>
            </div>
            <div className="serrowone">
                <img className='imgsize' src="https://cdn-icons-png.flaticon.com/128/726/726488.png" alt="secure payment" />
                <p>Super Secure Payment System</p>
            </div>
        </div>
    </>
  )
}

export default Services;

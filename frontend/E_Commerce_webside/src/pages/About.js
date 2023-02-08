import React from 'react'
import HeroSection from "../components/herosection";

const About = () => {

  return (
    <>
      <HeroSection heading={'About My Company'}
                image={'https://images.unsplash.com/photo-1571782742478-0816a4773a10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} 
                content={'A shopping centre is a collection of independent retail stores, services, and a parking area conceived,retail stores, services, and a parking area conceived, constructed, and maintained by a'}
                btn={'Shop Now'}
          />   
    </>
  );
};

export default About;
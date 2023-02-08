import React from 'react'
import FeatureProduct from '../components/FeatureProduct';
import Hero from '../components/herosection';
import Services from '../components/services';
import Truested from '../components/Truested';

const herodata = {
     heading:'Our Store',
     image:'https://images.unsplash.com/photo-1530804921746-a30f94d770ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0fGVufDB8fDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60',
     content:'A shopping centre is a collection of independent retail stores, services, and a parking area conceived,retail stores, services, and a parking area conceived, constructed, and maintained by a',
     button:'Shop Now',
}
const {heading,image,content,button} = herodata;

const Home = () => {
  return (
    <>
          <Hero heading={heading} image={image}  content={content}   btn={button} />    
          <FeatureProduct />
          <Services/>
          <Truested/>

     </>
  )
}

export default Home;
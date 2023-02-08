import React from 'react'
import { useProductContext } from '../context/productcontext';
import Product from './Product';

const FeatureProduct = () => {
        const {isLoading ,featureProducts} = useProductContext();
        
        if(isLoading){
           return <div>.....Loading</div>
        }
  return (

    <>
       <div className="container">
          <div className="container">
                <div className="intro_data">Check Now</div>
                <div className="common_heading">Our Feature services</div>
                <div className="grid grid_three_column">
                    {
                        featureProducts.map((curElem)=>{
                                return <Product key={curElem.id} {...curElem} />;
                        })
                    }
                </div>
          </div>
       </div>
    </>
  )
}

export default FeatureProduct;
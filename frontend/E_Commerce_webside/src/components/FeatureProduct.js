import React from 'react'
import { useProductContext } from '../context/productcontext';
import Product from './Product';
import '../style/featureProduct.css'
import { BounceLoader } from 'react-spinners';

const FeatureProduct = () => {
        const {isLoading ,featureProducts} = useProductContext();
        
        if(isLoading){
           return <div className='loader_page'><BounceLoader color='blue'/></div>
        }
  return (

    <>
       <div className="featureProduct_main_container">
          <div className="feature_P_container">
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
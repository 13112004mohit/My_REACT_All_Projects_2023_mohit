import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useProductContext } from '../context/productcontext';
import FormatPrice from '../Helpers/FormatPrice'
import PageNavigation from '../components/PageNavigation';


const API = 'https://api.pujakaitem.com/api/products';

const SingleProduct = () => {
  const {id} = useParams();
  
  const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();

  // here mere single product ke data ka destructured form aur yha id ka name Sid krdenge aapne convient ke liye
  const {id:Sid, name, company, price, description, category, stock, stars, reviews} = singleProduct;
   
   useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`)      
   },[]);

   if(isSingleLoading){
     return <div>Loading....</div>
   }
  return (
    <>
      <PageNavigation title={name} />       
      <p>{<FormatPrice price={price} />}</p>         
   </>
  )
}

export default SingleProduct
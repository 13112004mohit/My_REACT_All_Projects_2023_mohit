import React from 'react'
import {useProductContext} from '../context/productcontext';

const Product = () => {
 const data = useProductContext();
//  console.log(data)
  return (

    <h1>products </h1>
  )
}

export default Product;
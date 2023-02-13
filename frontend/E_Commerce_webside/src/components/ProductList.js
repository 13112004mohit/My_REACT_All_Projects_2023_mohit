import React from 'react'
import {useFilterContext} from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

  const {filter_products,product_View} = useFilterContext();


  if(product_View === true){
   return <GridView products={filter_products} />
  }

  if(product_View === false){
   return <ListView products={filter_products} />
  }

}

export default ProductList;
import React from 'react'
import Product from './Product'
import '../style/productPage.css'

const GridView = ({products}) => {
  return (
    <>
       <div className="container_flex_three_column">
       {
           products.map((curElem,id)=>{
                   return <Product key={curElem.id} {...curElem}/>
           })
        }
       </div>
    </>
  )
}

export default GridView
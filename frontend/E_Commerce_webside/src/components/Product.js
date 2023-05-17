import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
import '../style/product.css'

const Product = (curElem) => {
        const {id,name,image,price,category} = curElem;
  return (
    <>
     <div className="product_outer_container">
          <NavLink  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={`/singleproduct/${id}`} >
               <figure className='product_image_container'>
                  <img className='product_image' src={image} alt={name} />
                  <figcaption className='caption'>{category}</figcaption>
               </figure>
               <div className="card_data">
                <div className="card_data_flex">
                        <h3 className='product_name'>{name}</h3>
                        <p className="card_data_price">{<FormatPrice price={price} />}</p>
                </div>
               </div>
          </NavLink>
      </div>    
    </>
  )
}

export default Product
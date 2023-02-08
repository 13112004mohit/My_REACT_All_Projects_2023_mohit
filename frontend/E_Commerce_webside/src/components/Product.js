import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (curElem) => {
        const {id,name,image,price,category} = curElem;
  return (
    <>
          <NavLink to={`"/singleproduct/${id}"`} >
               <figure>
                  <img src={image} alt={name} />
                  <figcaption className='caption'>{category}</figcaption>
               </figure>
               <div className="card_data">
                <div className="card_data_flex">
                        <h3>{name}</h3>
                        <p className="card_data_pr">{price}</p>
                </div>
               </div>
          </NavLink>
    </>
  )
}

export default Product
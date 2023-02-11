import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
import '../style/productPage.css'

const ListView = ({products}) => {

  return (
    <>
       <div className="list_container">
        {
                products.map((curElem)=>{
                        const {id,name,image,price,description} = curElem;
                        return(
                                <NavLink to={`/singleproduct/${id}`} >
                                   <div className="car_grid_two_column">
                                        <figure className='list_product_image_container'>
                                                <img className='list_product_image' src={image} alt={name} />
                                        </figure>
                                        <div className='List_card_data'>
                                            <h3>{name}</h3>
                                            <p><FormatPrice price={price}/></p>
                                            <p>{description.slice(0,99)}...</p>
                                            <NavLink to={`/singleproduct/${id}`} >
                                                <button>Read More</button>
                                            </NavLink>
                                        </div>
                                </div>
                             </NavLink>
                        )
                })
        }
       </div>
    </>
  )
}

export default ListView
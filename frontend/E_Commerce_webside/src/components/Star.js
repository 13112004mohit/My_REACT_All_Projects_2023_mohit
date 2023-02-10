import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import '../style/singleProduct.css'

const Star = ({ stars, reviews }) => {

     const ratingStar = Array.from({ length: 5 }, (e, index) => {

          let number = index + 0.5;
          return (
             <span key={index} >
                     {
                             stars >= index + 1 
                               ? <FaStar className='icon_star'/>
                               : stars >= number
                               ? <FaStarHalfAlt  className='icon_star'/>
                               : <AiOutlineStar  className='icon_star'/>
                     }
              </span>
           )
     })


     return(
        <>
           <div className="icon_style">
                {ratingStar}
                <p>({reviews} customer reviews)</p>
           </div>
        </>
     )

}

export default Star
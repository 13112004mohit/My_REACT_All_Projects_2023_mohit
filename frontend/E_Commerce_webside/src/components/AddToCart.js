import React,{useState} from 'react'
import { FaCheck } from 'react-icons/fa';
import '../style/singleProduct.css'

const AddToCart = ({product}) => {
        
        const {id,colors,stock} = product;
        const [color,setColor] = useState(colors[0])
        

  return (
    <div className='colors'>
        <p>Colors:
          {
            colors.map((curColor,index)=>{
              return <button 
                       key={index} 
                       className={color === curColor ? "btnStyle active" : "btnStyle"} 
                       style={{backgroundColor:curColor}} 
                       onClick={()=> setColor(curColor)}
                       > 
                       {color === curColor ?  <FaCheck className='checkcolor'/> :  null } 
                      </button> 
            })
          }
        </p>
    </div>
  )
}

export default AddToCart
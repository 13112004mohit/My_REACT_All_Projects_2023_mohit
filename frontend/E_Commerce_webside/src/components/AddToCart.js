import React,{useState} from 'react'
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../style/singleProduct.css'
import CartAmountToggle from './CartAmountToggle';

const AddToCart = ({product}) => {
        
        const {id,colors,stock} = product;
        const [color,setColor] = useState(colors[0])
        const [amount,setAmount] = useState(1);

        const setDecrease = () =>{
          amount > 1 ? setAmount(amount-1) : setAmount(1);
        }
        const setIncrease = () =>{
          amount < stock ? setAmount(amount+1) : setAmount(stock);
        }

  return (
    <>
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

    {/*  add to cart */}


     <CartAmountToggle 
       amount={amount}
       setDecrease={setDecrease}
       setIncrease={setIncrease}
      />
      <NavLink to='/cart'>
        <button className='Addtocart_btn' >Add to Cart</button>
      </NavLink>   

   </>
  )
}

export default AddToCart;
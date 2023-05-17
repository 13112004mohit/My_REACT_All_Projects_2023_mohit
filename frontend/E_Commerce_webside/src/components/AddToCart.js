import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import '../style/singleProduct.css'
import CartAmountToggle from './CartAmountToggle';
import { useCartContext } from '../context/cart_context';

const AddToCart = ({product}) => {
  const {addToCart} = useCartContext();
        
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
      Colors:
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
    </div>



    {/*  add to cart */}

     <CartAmountToggle 
       amount={amount}
       setDecrease={setDecrease}
       setIncrease={setIncrease}
      />

      <NavLink to='/cart'
               onClick={()=> addToCart(id,color,amount,product) }
        >
        <button  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} className='Addtocart_btn' >Add to Cart</button>
      </NavLink>   

   </>
  )
}

export default AddToCart;
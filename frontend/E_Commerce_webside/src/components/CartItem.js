import React from 'react'
import FormatPrice from '../Helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import '../style/cart.css'

const CartItem = ({id,name,image,color,price,amount}) => {
        const {removeItem,setDecrease,setIncrease} = useCartContext();

        // const setDecrease = () =>{
        //         // amount > 1 ? setAmount(amount-1) : setAmount(1);
        //       }
        // const setIncrease = () =>{
        //         // amount < stock ? setAmount(amount+1) : setAmount(stock);
        //       }

  return (
    <>
       <div className="cart_item_five_col">
        {/* image name color */}
          <div className="img_twocol">
                <div className="item_image">
                        <figure>
                           <img className='cart_item_img' src={image} alt={name} />
                        </figure>
                </div>
                <div className="name_color_two_row">
                      <div className="itemname">{name}</div>
                      <div className="colors">
                        <p>Color : </p>
                        <div className='btnStyle'  style={{backgroundColor:color }}></div>
                      </div>
                </div>
          </div>

          {/* price */}
          <div className="cart_hide_price">
                <p><FormatPrice price={price} /></p>
          </div>

          {/* Quantity */}
          <div className="cartQuantity">
              <CartAmountToggle 
                  amount={amount} 
                  setDecrease={()=>setDecrease(id)}
                  setIncrease={()=>setIncrease(id)}
              />
          </div>

          {/* Subtotal */}
          <div className="cart_hide_subtotal">
                <p><FormatPrice price={price * amount} /></p>
          </div>

          {/* remove items */}
          <FaTrash className='cart_item_remove' 
                    onClick={()=> removeItem(id)} 
          />
       </div>
       <div className='cart_items_underline'></div>
    </>
  )
}

export default CartItem
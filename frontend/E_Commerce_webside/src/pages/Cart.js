import React from 'react'
import { useCartContext } from '../context/cart_context';
import CartItem from '../components/CartItem';
import { NavLink } from 'react-router-dom';
import '../style/cart.css'
import FormatPrice from '../Helpers/FormatPrice';

const Card = () => {

  const {cart , clearCart,shipping_fee,total_price} = useCartContext();

  // this is optional if item not present then simple print ye wala 
  if(cart.length === 0){
    return <div className='not_item_cart'>
             <p>No Item in Cart </p>
           </div>
  }
  
  // if item in the cart present in the cart then print ye wala
  return (
    <>
     <div className="cart_container">
        {/* cart heading */}
         <div className="cart_heading">
           <p>Item</p>
           <p className="cart_hide">Price</p>
           <p>Quantity</p>
           <p className="cart_hide">Subtotal</p>
           <p>Remove</p>
         </div>

        <div className='cart_underline'></div>

          {/* cart items */}
          <div className="cart_item">
             {
              cart.map((curElem)=>{
                return <CartItem key={curElem.id} {...curElem} /> 
              })
             }
          </div>   
          {/* continue shoping & clear button */}
          <div className="cart_two_button">
            <NavLink to="/product">
              <button className='cart_continue_shopping'>Continue Shopping</button>
            </NavLink>

            <button onClick={clearCart} className="cart_delete_button">Clear Cart</button>
          </div>

          {/* total bill */}
          <div className="toalbill_cart">
              <p>Subtotal : 
                <span className='cart_price_toalbill'>
                  <FormatPrice price={total_price}/>
                </span>
              </p>
              <p>Shipping Fee : 
                 <span className='cart_price_toalbill'>
                   <FormatPrice price={shipping_fee}/>
                 </span>
              </p>
              <hr />
              <p>Order Total : 
                 <span className='cart_price_toalbill'>
                   <FormatPrice price={(total_price>=500)? (total_price+shipping_fee) : (total_price ) }/>
                 </span> 
              </p>
              <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'checkout'}>
                 <button  className="cart_continue_shopping">Order check out</button>
              </NavLink>
          </div>


      </div>
    </>
  )
}

export default Card;

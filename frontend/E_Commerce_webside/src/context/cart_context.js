import {createContext, useContext,useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'

const CartContext = createContext();

  const getLocalCartData =()=>{
    let localCartData = localStorage.getItem("ItemCart");
    if (localCartData === null    ){
         return [];
    }else{
        return JSON.parse(localCartData);
    }
  }

const initialState = {
      //  cart:[],
       cart:getLocalCartData(),
       total_amount:"",
       total_price:"",
       shipping_fee:50000, 
}

 const CartProvider = ({children}) => {

        const[state,dispatch] = useReducer(reducer,initialState)
        
 const addToCart = (id,color,amount,product) =>{
        dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}})
 }

   
//  increament and decrement the product
 const setDecrease =(id)=>{
        dispatch({type:"SET_DECREASE",payload:id}) 
 }
 const setIncrease =(id)=>{
        dispatch({type:"SET_INCREASE",payload:id}) 
 }


//  remove indivisual item from cart
 const removeItem = (id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
 }

 const clearCart =()=>{
        dispatch({type:"CLEAR_CART"});
 }

//  for local storage
   useEffect(() => {
       dispatch({type:"CART_TOTAL_ITEM"})
       dispatch({type:"CART_TOTAL_PRICE"})
       localStorage.setItem("ItemCart",JSON.stringify(state.cart))
   }, [state.cart]);

  return (
    <CartContext.Provider value={{...state, addToCart,setDecrease,setIncrease,removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
  )
}

const useCartContext =()=>{
        return useContext(CartContext)
}

export default CartProvider;
export {useCartContext}
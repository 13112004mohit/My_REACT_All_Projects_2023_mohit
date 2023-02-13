import React from 'react'
import { FaMinus,FaPlus } from 'react-icons/fa'
import '../style/singleProduct.css'

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
        console.log(amount)
  return (
    <>
    <div className='cart_button'>
      <div className="amount_toggle">
        <button className='quantityBTN' onClick={()=> setDecrease()} ><FaMinus className='quantityBTNicon'/></button>
        <div className="amount_style">{amount}</div>
        <button className='quantityBTN' onClick={()=> setIncrease()} ><FaPlus className='quantityBTNicon'/></button>
      </div>
    </div>
    </>
  )
}

export default CartAmountToggle
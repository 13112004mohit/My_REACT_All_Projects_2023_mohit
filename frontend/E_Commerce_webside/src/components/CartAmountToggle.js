import React from 'react'
import { FaMinus,FaPlus } from 'react-icons/fa'

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
        console.log(amount)
  return (
    <>
    <div className='cart_button'>
      <div className="amount_toggle">
        <button onClick={()=> setDecrease()} ><FaMinus/></button>
        <div className="amount_style">{amount}</div>
        <button onClick={()=> setIncrease()} ><FaPlus/></button>
      </div>
    </div>
    </>
  )
}

export default CartAmountToggle
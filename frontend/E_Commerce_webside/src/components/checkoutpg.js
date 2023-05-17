import React from 'react'
import '../style/checkout.css' 
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>

        <section className="login_main_pg">
           <div className="one_col__checkout">
              
              <div className="first_con_img">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcn6t-cenXz5a8AHJwqItAK5BUAE-4e19CQ&usqp=CAU " alt="" />
              </div>
              <h1>your order is on the way</h1>
               
              <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to="/product">
              <button className='cart_continue_shopping'>Continue Shopping</button>
            </NavLink>

           </div>
        </section>
    
    </>
  )
}

export default Login;
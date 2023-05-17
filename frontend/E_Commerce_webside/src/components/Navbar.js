import React from 'react'
import { NavLink } from 'react-router-dom';
import '../style/NavCss.css';
import { useCartContext } from '../context/cart_context';

const Navbar = () => { 

  const {total_amount} = useCartContext();

  const menu=()=>{
    const nav = document.getElementById('navbar');
        nav.classList.add('active');
  }
  const menuclose=()=>{
    const nav = document.getElementById('navbar');
        nav.classList.remove('active');
  }
 

  return (
    <>
      <section id="header">
        <NavLink to={'/'}><img src="logo.png" className="logo" alt="logoOur" /></NavLink>
        <div>
            <ul id="navbar">
                <li><NavLink  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'} >Home</NavLink>  </li>
                <li><NavLink  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/about'} >about</NavLink>   </li>
                <li><NavLink  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'} >Contact</NavLink>  </li>
                <li><NavLink  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/product'} >Product</NavLink>   </li>
                {/* <li><NavLink to={'/singleproduct/:id'} >SingleProduct</NavLink>  </li> */}
                <li><NavLink  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/login'} ><button>Login</button></NavLink>  </li>

                <li>
                  <NavLink  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/cart'}>
                     <img  style={{width:'25px'}} src="https://cdn-icons-png.flaticon.com/128/7606/7606186.png" alt="cart" />
                     <span className='cart_tollge_amount'>{total_amount}</span>
                  </NavLink>
                </li>

                <i onClick={menuclose} id="close" className="fa-solid fa-x" />
            </ul>

        </div>
        <div id="mobile">
          <i onClick={menu} id="bar" className="fas fa-outdent" />
        </div>
      </section>

  
    </>
  )
}

export default Navbar;
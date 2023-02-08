import React from 'react'
import { NavLink } from 'react-router-dom';
import '../style/NavCss.css';
// import Footer from './Footer'

const Navbar = () => {

  // const [] = useState();

  
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
      <li><NavLink to={'/'} >Home</NavLink>   </li>
      <li><NavLink to={'/about'} >about</NavLink>   </li>
      <li><NavLink to={'/contact'} >Contact</NavLink>  </li>
      <li><NavLink to={'/product'} >Product</NavLink>   </li>
      {/* <li><NavLink to={'/singleproduct/'} >SingleProduct</NavLink>  </li> */}
      <li><NavLink to={'/login'} ><button>Login</button></NavLink>  </li>
      <li id="lg-bag"><NavLink to={'/cart'}><img  style={{width:'25px'}} src="https://cdn-icons-png.flaticon.com/128/7606/7606186.png" alt="cart" /></NavLink></li>
          <i onClick={menuclose} id="close" className="fa-solid fa-x" />
      </ul>
        </div>
        <div id="mobile">
            <NavLink to={'/cart'}><img  style={{width:'25px'}} src="https://cdn-icons-png.flaticon.com/128/7606/7606186.png" alt="cart" /></NavLink>
             <i onClick={menu} id="bar" className="fas fa-outdent" />
        </div>
      </section>

  
    </>
  )
}

export default Navbar;
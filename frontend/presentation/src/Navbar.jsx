import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
         <ul>
           <li>  <NavLink className={'Nav'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} activeClassName='active' to={'/'} >Cotter</NavLink>         </li>
           <li>  <NavLink className={'Nav'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} activeClassName='active' to={'knuckle'} >Knuckle</NavLink>  </li>
           <li>  <NavLink className={'Nav'} onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} activeClassName='active' to={'about'} >About</NavLink>      </li>
         </ul>
         
    </>
  )
}

export default Navbar;

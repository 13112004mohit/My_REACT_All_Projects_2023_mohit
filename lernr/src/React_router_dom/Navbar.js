import React from 'react';
import {NavLink} from 'react-router-dom';
import './c.css'
// import About from './About'
// import Home from './Home'

// we Can use NavLink or Link  but NavLink use krne pr hme activeClassName='' milta hai aur Link pr nhi milta 
// aur a tag ke place pr hmme Navlink or Link ka use krne pr hi page reloade nhi hoga

const Routing =()=>{
  return(
     <>

{/* Navlink or link tbhi work krega jbbb main pr hmmm routes ka use krenge */}
       <h3 style={{color:'red'}}>page not reload</h3>
       {/* iska use krte hai takii ye router ke path ko change kre or isske use se user only click krne pr hi other page pr chlajayega
        use URL pr click nhi krna hoga user URl pr bina likhe otherpage pr jaske isliye nii hmmm NavLink or link or anchor tag ka use 
        krte hai  */}
        <NavLink  activeClassName='active' to={'/home'}>HOME </NavLink>  <br />
        <NavLink  activeClassName='active' to={'/about'}>ABOUT</NavLink> <br />
        <NavLink  activeClassName='active' to={'/name'}>Name</NavLink> <br />
        <NavLink  activeClassName='active' to={'/params/defaultName/2nddefname'}>ParamsHOOK</NavLink> <br />

       <h3 style={{color:'red'}}>page reload</h3>
        <a href="/Home" > home</a> <br />
        <a href="/About"> about</a>  <br />
        <a href="/name">name</a>
     </>
    );
}
export default Routing; 
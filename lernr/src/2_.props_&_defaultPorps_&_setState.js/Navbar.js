// Understanding 👁‍🗨Props And 👁‍🗨Prototype and 👁‍🗨defaultProps ! 


import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {  // yha pr props ke place pr kuchh bhi likh skte hai
  return (
    
   <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <div className="container-fluid">
      <a href="/" className="navbar-brand">{props.title }</a>
      <button className='navbar-toggler' type='button' data-bs-toggle="collase" data-bs-target="#navbarSupportedContent" 
      aria-controls='navbarSupportedContent' aria-expanded='false'  aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
       </button>
       <div className='collapse navbar-collapse' id="navbarSupportedContent" >
        <ul className='navbar-nav me-auto mb-2 mb-lg-0' >
          <li className='nav-item' >
            <a className='nav-link active' aria-current="page" href="/">Home</a>
          </li>
          <li className='nav-item' >
            <a  className='nav-link' href="/">{props.aboutText}</a>
          </li>
        </ul>
        <form className="d-flex" >
            <input type="search" className="form-control me-2" placeholder='Search' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit' >Search</button>
        </form>
       </div>
    </div>
   </nav>

  );
}

// PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype
Navbar.propTypes = {
        title:PropTypes.string.isRequired,
        aboutText:PropTypes.string.isRequired
         }
//  default mean if any person use props but not mention. then default call himself but person
//  write then  default not call 
Navbar.defaultProps = {
        title:'set titel here default if title not set',
        aboutText:'in the defaultprops mean default '
      }
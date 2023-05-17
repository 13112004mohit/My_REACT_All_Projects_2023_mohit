import React from 'react';
import './note.css'

const main ={
    width:'100%',
     display:'flex',
     justifyContent:'center',
     position:'sticky',
     backgroundColor:'#ccc'
}

const Header =()=>{
    return(
     <>
         <div style={main}>
            <h1 className='headername'>NOTE Application</h1>
         </div>
     </>
    );
}

export default Header;
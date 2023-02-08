import React from 'react';

const main ={
    width:'100%',
     display:'flex',
     justifyContent:'center',
     position:'sticky',
     backgroundColor:'#ccc'
}
const headername ={
    textShadow:'3px 3px 8px #ccc',
    color:'white',
    fontWeight:'bold',
    fontSize:'40px',
}
const Header =()=>{
    return(
     <>
     
         <div style={main}>
            <h1 style={headername}>NOTE Application</h1>
         </div>
     </>
    );
}

export default Header;
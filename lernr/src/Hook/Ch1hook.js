import React, { useState } from 'react';
import AnalogClock from 'analog-clock-react';


const body={
//  backgroundColor:'red',
 width:'100%',
 height:'100vh',
 display:'flex',
 justifyContent:'center', 
 flexDirection:'column',
 alignItems:'center',
}
const main ={
  // overflow:'hidden',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  width:'18em',
  height:'39em',
  border:'1px solid #ccc',
  borderRadius:'10px'
}
const number={
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  // backgroundColor:'#ccc',
  width:'18em',
  height:'10em',
}
const btns={
  display:'flex',
  justifyContent:'space-evenly',
  alignItems:'center',
  // backgroundColor:'#ccc',
  width:'18em',
  height:'3em',
}
const btn ={
  border:"1px solid blue",
  borderRadius:"5px ",
  color:"white",
  // padding:"10px 25px",
  fontWeight:"bold",
  fontSize:'34px',
  textAlign:'center',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  width:'74px',
  height:'33px',
  backgroundColor:"#ccc"
}
const h1={
  fontSize:'156px'
}


//  HOOK is Always USE in React body of  functional component

export default function Ch1hook() {

// const [count,setCount] = useState(0); //deceler a new STATE varible , which call "count"  useState me jo value dete hai wo count ko milta hai first time 
        //count -> current data ,| setCount->  updated data =| useState -> initional data  |  
const [count,setCount] = useState(0);        // setCount me jo value update hoga wo value bhi count ko hi milega

const IncNum = () =>{
  setCount(count + 1);
    // console.log('clicked')
}

const DecNum = () =>{
  if(count > 0){
  setCount(count - 1);
    // console.log('clicked')
  }
}

  return (
    <>
    <div style={body}>
      <div style={main}>
         <AnalogClock/>
        <div style={number}>
        <h1 style={h1}>{count}</h1>
        </div>
        <div style={btns} >
            <button style={btn} onClick={IncNum} >+</button>
            <button style={btn} onClick={DecNum} >-</button>
            <input type="range" ste/>
        </div>
        </div>
        </div>
    </>
  );
}

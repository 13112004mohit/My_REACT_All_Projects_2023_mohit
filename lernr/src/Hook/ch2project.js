import React, { useState }  from 'react';

export default function Ch2project() {

    
    const body ={
        width:"100vw",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"pink"
    }
  
    const present={
        display:"flex",
        flexDirection:"column",
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        padding:"20px",
        borderRadius:"30px "
    }
    const Time={
        fontFamily:"'Splash',cursive",
        color:"green",
        fontWeight:"bold",
        marginRight:"20px"
    }
    const btn ={
        border:"3px solid blue",
        borderRadius:"10px ",
        color:"white",
        fontWeight:"bold",
        backgroundColor:"purple"
    }
    
    let Todaytime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(Todaytime);

    const UpdateTime = () =>{
        Todaytime = new Date().toLocaleTimeString();
        setCtime(Todaytime)
    }

    setInterval(()=>{  UpdateTime(); },1000)

  return (
    <>
   <div style={body}>
       <div style={present}>
        <h1 style={Time} > {ctime}</h1>
        <button onClick={UpdateTime} style={btn} >Get current time</button>
       </div>
   </div>
    </>
  );
}


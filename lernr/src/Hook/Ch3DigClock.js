import React, { useState } from "react";

const Ch3digitalClock =() =>{
    
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
    const time={
        fontFamily:"'ariel',cursive",
        color:"green",
        fontWeight:"bold",
        marginRight:"20px"
    }


  let today = new Date().toLocaleTimeString();
   const [ctime,setCtime] = useState(today);

   const UpdateTime =()=>{
      let today = new Date().toLocaleTimeString();
      setCtime(today);
   }
   setInterval(UpdateTime,1000)
//    // yha ctime ya today dono pr hi clega kuki update hone ke bad current data and intional data dono ka value same ho jarha hai

//    HERE SEING SETINTERVAL AUTOMATIC 1000 MILESECOND AFTER UPDATE VALUE  
//  BSS phele btn click pr setCtime ka value update hota tha aur abb
// setInterval 1000 milesecond after setCtime ka value updte kr rha hai 

    return(
        <>
     <div style={body}>
       <div style={present}>
        <h1 style={time} > {today}</h1>  
       </div>
   </div>
        </>
    ) 
}

export default Ch3digitalClock;
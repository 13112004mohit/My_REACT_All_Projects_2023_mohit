import React,{useState} from 'react';

export default function ProjectHello() {
    

    const body ={
        width:"100vw",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"pink"
    }
    const hello={
        fontFamily:"'Splash',cursive",
        color:"red",
        fontWeight:"bold",
        marginRight:"20px"
    }
    const present={
        display:"flex",
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        padding:"20px",
        borderRadius:"30px "
    }
    const timeshow={
      color:"blue",
      fontFamily:"'ariel',cursive",
      fontSize:"10px",
      float:"right",
      marginLeft:"10px"
    }
     
    
    let greeting = "Time Traped";
    let styl = {color:"blue",fontFamily:"Ariel"};
    let today = new Date();
    let time = today.toLocaleTimeString();
    let hour = today.getHours();

    if(hour >=1 && hour < 12 ){
         greeting = "Good Morning";
         styl.color = "green";
         styl.fontFamily ="'Splash',cursive";
    }
    else if(hour >=12 && hour <20){
         greeting = "Good Afternoon"; 
         styl.color = "orange"; 
         styl.fontFamily ="'Splash',cursive";
    } 
    else if(hour >=20 && hour <=24){
        greeting = "Good Night"
        styl.color = "black";
        styl.fontFamily ="'Splash',cursive";
    }
    
// THIS BLOW  6 line of CODE  work for digital clock 
const [ctime,setCtime] = useState(time);
const UpdateTime =()=>{
    let today = new Date().toLocaleTimeString();
    setCtime(today);
  }
    setInterval(()=>{
       UpdateTime()   
    },1000)

    

  return (
   <>
   <div style={body}>
       <div style={present}>
          <h1 style={hello}>Hello sir <span style={styl}>{greeting} <p style={timeshow}>{ctime}</p></span> </h1>
       </div>
   </div>
   </>
  );
}

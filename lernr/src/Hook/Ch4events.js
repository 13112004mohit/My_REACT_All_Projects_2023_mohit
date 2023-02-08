import React,{useState} from 'react';

export default function Ch4events() {
 
    const present={
        width:"100%",
        height:"100vh",
        display:"flex",
        backgroundColor:"purple",
        alignItems:"center",
        justifyContent:"center",
    }
  
    const btn ={
        border:"3px solid blue",
        borderRadius:"10px ",
        color:"white",
        padding:"20px 40px",
        fontWeight:"bold",
        backgroundColor:"purple"
    }
    const btchangec ={
        border:"3px solid blue",
        borderRadius:"10px ",
        color:"purple",
        padding:"20px 40px",
        fontWeight:"bold",
        backgroundColor:"white",
        fontSize:"30px"

    }
    const bgc ={
        width:"100%",
        height:"100vh",
        backgroundColor:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        padding:"20px",
        borderRadius:"30px "
    }

    const [bg,setBg] = useState(bgc);
    const [bt,setBt] = useState(btn);
    const [cl,setCl] = useState('click me');
    

    const chang =() =>{
        setBg(present)
        setBt(btchangec)
        setCl('i am go 😟')
    }
    const dbchang =()=>{
        setBg(bgc)
        setBt(btn)
        setCl('i am back 👱‍♂️')
    }
 return(
    <>
        <div style={bg}>
             
            <button style={bt} onClick={chang} onDoubleClick={dbchang}>{cl}</button>
        </div> 
    </>
 );
}
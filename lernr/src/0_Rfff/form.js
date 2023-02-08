import React,{useState} from "react";

const Form=()=>{
    const present={
        width:"100%",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#333333",
        alignItems:"center",
        justifyContent:"center",
    }
    const input ={
        border:"2px solid white",
        borderRadius:"10px ",
        color:"#333333",
        padding:"10px 50px 10px 120px",
        fontWeight:"bold",
        backgroundColor:"white",
        outline:"none",
        margin:"20px"
    }
    const btn ={
        border:"3px solid #f1ff",
        borderRadius:"10px ",
        fontSize:'24px',
        color:"white",
        padding:"5px 50px",
        fontWeight:"bold",
        backgroundColor:"#f1ff"
    }
  
    const[data,setData] = useState('')
    const[text,setText] = useState('')
       
      const change=(event)=>{
          setData(event.target.value)
      }
       
       const datasave=()=>{
         setText(data)
       }  
       
  return (
    <>
        <div style={present}>
             <h1>Hay {text} </h1>   

             <input
             style={input} 
             onChange={change}  
             placeholder='Enter your name' 
             type="text" 
             />

             <button onClick={datasave}  style={btn}>save</button>        
        </div>
    </>

  )
}

export default Form; 
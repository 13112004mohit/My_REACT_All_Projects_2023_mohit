import React,{useState} from 'react'

export default function Ch5forms() {

    const present={
        width:"100%",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#000800",
        alignItems:"center",
        justifyContent:"center",
    }
    const input ={
        border:"2px solid white",
        // borderRadius:"10px ",
        color:"#333333",
        padding:"10px 50px 10px 120px",
        fontWeight:"bold",
        backgroundColor:"white",
        outline:"none",
        margin:"20px"
    }
    const btn ={
        border:"3px solid blue",
        borderRadius:"10px ",
        color:"white",
        padding:"15px 30px",
        fontWeight:"bold",
        backgroundColor:"#333333"
    }
  

     
    const [text,setText] = useState('');
    const [name,setNname] = useState('');
    const [btns,setBtns] = useState('click me');
    

    const valuechange =(event)=>{
        console.log(event.target.value);
        setText(event.target.value)   
    }
    

    const chang =() =>{
        setNname(text);
        setText(' ')
        setBtns('i am go 🏃‍♀️ ') 
    }
  

  return (
    <>
        <div style={present}>
            <h1>Hello {name}</h1>
             
            <input 
            style={input} 
            placeholder='Enter your name'
            type="text"  
            value={text}
            onChange={valuechange} 
            name="text"
            />
            
            <button onClick={chang} style={btn}>{btns}</button>

        </div>
    </>

  )
}

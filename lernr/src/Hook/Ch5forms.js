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
  

     
    const [text,setText] = useState({
        username:''
    });
    

    const valuechange =(event)=>{
      const {value,name} = event.target;  
        
        //   setText((previousdata)=>{
        //     return{...previousdata,[name]:value}
        // })
        setText({ ...text, [name]:value });
    }
    

    const chang =() =>{
        setText('')
        text.username = ""
    }
  

  return (
    <>
        <div style={present}>
            <h1>Hello {text.username}</h1>
             
            <input 
            style={input} 
            placeholder='Enter your name__'
            type="text"  
            value={text.username}
            onChange={valuechange} 
            name='username'
            />
            
            <button onClick={chang} style={btn}>click</button>

        </div>
    </>

  )
}

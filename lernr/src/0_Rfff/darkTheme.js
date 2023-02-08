import React,{useState} from 'react';
import './darkTheme.css'

export default function Ch4events() {
    
    const dark={
        backgroundColor:" #404040",
        width:"100%",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }
   
    const white ={
        // backgroundColor:"white",
        width:"100%",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        padding:"20px",
        borderRadius:"30px "
    }


    const [backgroundg,setBackgroundg] = useState(white);
    

    // checkBox.addEventListener('click',chang)
    const chang =() =>{
        let checkBox = document.getElementById('checkbtn')
        if(checkBox.checked === true){
            setBackgroundg(dark)
        }
        else{
            setBackgroundg(white)
        }
    }
   
 return(
    <>
        <div style={backgroundg}>
             
                       
               <label className="switch">
                 <input id='checkbtn' onClick={chang}   type="checkbox" />
                 <span className="slider round"></span>
               </label>

     
        </div>  
    </>
 );
}
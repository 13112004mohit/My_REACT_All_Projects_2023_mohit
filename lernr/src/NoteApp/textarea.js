import React,{useState} from 'react';
import Note from './note';
import './note.css'


const heading={
    width:'100%',
    height:'30px',
    minHeight:'30px',
    textDecoration:'none',
    outline:'none',
    color:'black',
    fontWeight:'bold'
}
const noteareas={
    width:'100%',
    height:'30vh',
    minHeight:'30vh',
    outline:'none',
}
const btn={
    outline:'none',
    border:'2px solid #ccc',
    // margin:'5px 0' ,
    fontWeight:'bold',
    position: 'relative',
    bottom: '25px',
    left:'90%',
    width:'50px',
    height:'50px',
    borderRadius:'50%',
    // border:'none',
    boxShadow:'2px 3px 7px #ccc',
    color:'white'
}
const pluse={
    width:'25px',
    height:'25px',
}
const Textarea =({cart,setCart})=>{

    const [note,setNote] = useState({
        title:"",  
        content:"",
    });
    
    // ye onChange data ko value me derha hai setNote ka use krke
    const InputEvent = (event)=>{
        // const value = event.target.value;
        // const name = event.target.value;
        const {name,value} = event.target;  // destructuring
        setNote((prevData) =>{
            return {
                ...prevData,   //spread operator for object 
               [name]:value, // object of (key:value) pair
            }
        });  //short method of that look below
        setNote({ ...note, [name]: value });
    }
     
    const addEvent = ()=>{
        setCart([...cart,note])
        setNote({ title:'',content:'' })  
    }; 

    return(
        // phele jbb bhi hmm textarea me ya input field me jobhi likhte hai phele wo onChange me     jata hai tb suddenly onChange puradata value me assign kr deta hai
     <>
     <div className='maintextarea'>
       <textarea  name='title'   style={heading}   cols="30" rows="10" value={note.title} 
           onChange={InputEvent} 
           placeholder='Heading'/>
       <textarea  name='content' style={noteareas} cols="30" rows="10" value={note.content}  
           onChange={InputEvent}  
           placeholder='enter your note here...' />

       <button onClick={addEvent} style={btn}> <img style={pluse} src="https://cdn-icons-png.flaticon.com/128/2377/2377877.png" alt="" /> </button>
     </div>

     <div id='main'>
            <div id="maincontent">
      {  cart.map((val,index) => {
           return <Note key={index} id={index} {...val} cart={cart} setCart={setCart}  />
             })}
    </div>
          </div>
     </>
    );
}
// deletItem ={onDelete}
export default Textarea;
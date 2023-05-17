import React from 'react';
import './note.css'

const Note = ({title,content,cart,setCart,id})=>{
  const onDelete=()=>{
    setCart(cart.filter((e,index) => index!=id)) 
 }
    return(
     <>
       <div className="notemain">
           <h3>{title.slice(0,15)}...</h3>
           <p>{content.slice(0,90)}...</p>
           <button onClick={onDelete} ><img  src="https://cdn-icons-png.flaticon.com/128/1215/1215092.png" alt="" /></button>
       </div>
       
     </>
    );
}

export default Note;

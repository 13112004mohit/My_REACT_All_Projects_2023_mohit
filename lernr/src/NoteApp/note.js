import React from 'react';
import './note.css'

const Note = (props)=>{
  const deletNote =() =>{
    props.deletItem(props.id);
   }
    return(
     <>
       
       <div className="notemain">
           <h3>{props.title}</h3>
           <p>{props.content}</p>
           <button onClick={deletNote} ><img  src="https://cdn-icons-png.flaticon.com/128/1215/1215092.png" alt="" /></button>
       </div>
       
     </>
    );
}

export default Note;
// Understanding 👁‍🗨State And 👁‍🗨Heandling event ! 


import React, {useState} from 'react';


export default function TextForm(props) {
     
    // const [count,setCount] = useState(0); //deceler a new STATE varible , which call "count" 
    const [text,setText] = useState('Enter txt here');
    // setText("new text");  // for change state using this way 
       
    const handleOnChange = (event) =>{
      setText(event.target.value)
                                   // console.log("on change");
    }

    const handleUpClick = () =>{
      let newText = text.toUpperCase();
      setText(newText)
                                 //  console.log("on Change fire herer");
    }
    
     
    return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="myBox" className="form-label">HEADING</label> */}
        <textarea  id="myBox" className='form-control' value={text} onChange={handleOnChange} placeholder={text} cols="30" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>convert to Uppercease </button>
    </div>
  );
}

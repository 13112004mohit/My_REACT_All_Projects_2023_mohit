import React,{useState} from 'react';
import './Accordino.css'

// yha pr hme data object me milrha hai to hmm destructuring kr diye hai aur abb hme props.question ,props.ans nhi krna pda
const MyAccodion = ({question,answer})=>{
    const [show,setShow] = useState(false);
    return(
     <>
         <div className="main-heading">
            <h3>{question}</h3>
            <p onClick={()=>setShow(!show)}  > {show? "⏏️":"🔽"} </p>
         </div>
         { show  &&   <p className='answer'>{answer}</p> }
         
     </>
    );
}
     {/* here show=false  then !show mean true because after using ! 
         The exclamation mark (!), also known as a "bang," is a logical operator in programming that
         negates a boolean value. In other words, if a value is "true," using the exclamation mark 
         will make it "false," and if a value is "false," using the exclamation mark will make it "true."
                So !false would be "true"*/}


                
// yha props use kiye hai to yha destructuring nhi krna pda aur wha pr sperad operator ka use nhi nhi kiye
// const MyAccodion = (props)=>{

//     const [show,setShow] = useState(false);
//     return(
//      <>
//          <div className="main-heading">
//             <h3>{props.que}</h3>
//             <p onClick={()=>setShow(!show)}  > {show? "⏏️":"🔽"} </p>
//          </div>
//          { show  &&   <p className='answer'>{props.ans}</p> }
         
//      </>
//     );
// }
export default MyAccodion;

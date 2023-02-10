import React,{useRef,useState,useEffect} from 'react'

const Uncontrolledform = () => {
        //💦 Uncontrolled form have less controlling comparing to controlled kuki yha pr hmm value name and onChange ka  use hi nhi krte hai aur react ka useRef use krte hai ye only simple single task ke liye hota hai ki agar task small hoto jaldi hojaye small line of code me 
        //💦 SECOND USE OF useRef  to access your DOM element directly
        //💦 The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
        //💦 Which case should you use useRef?
        //💦 A very common use case for using useRef is for when, suppose you click on a button, and then on its click you want an input to come into focus. To do this, we would need to access the DOM element of input and then call its function focus() to focus the input.
        const userefData = useRef(null);  // yha pr ref ko input me ka textarea me likhte hai 
        console.log(userefData)
        
        const [show,setShow] = useState(false);
        const [nameu,setName] = useState();
 
        const submitForm =(e)=>{
                e.preventDefault();
                  const name = userefData.current.value;
                name === "" ? alert('please feel your name') : setShow(true)
                setName(userefData.current.value);

                // here we using useref to access dom and here current is a object where all property of useref 
                userefData.current.style.backgroundColor = "cyan"
        }
        
        
  return (
        <>
          <div>
                <form action="" onSubmit={submitForm}>
                        <div>
                                <label htmlFor="name_">enter your name</label>
                                <input type="text" id='name_' ref={userefData} />
                        </div> <br />
                        <button>submit</button>
                </form>
                <p>{show ? `your name is ${nameu} `: "" }</p>
          </div>
        </>
  )
}

export default Uncontrolledform
import React,{useState} from 'react'

export default function Ch5forms2() {

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
    const [text2,setText2] = useState('');
    const [name,setNname] = useState('');
    const [name2,setNname2] = useState('');
    const [btns,setBtns] = useState('click me');
    

    const valuechange =(event)=>{
        console.log('input work');
        setText(event.target.value)

      console.log(event) //ye onchange hi hai bss aapna pura data event ko dediya hai bss itna smjho
     //   onchange hole data ko  call krta hai onchange me sbhi kuchh hai aap event ko print krake dekh skte hai
      console.log(event.target)
      //   yha pr hmm onchange ko event me leye hai aur useme target ek attribute hai 
       console.log(event.target.value)
      // aur target me placehoder,type ,name and value krke bhut sare child attribute hai 
      // hmm yha only value kohi call kiye hai agar hmm target.text ya target.placeholer
      // lihi to wobhi aayega youcan check-->> |
      console.log(event.target.placeholder)

        
    }
    const valuechange2 =(event)=>{
        console.log('input work');
        setText2(event.target.value)
        
    }
    
    
    const chang =(event) =>{
        // event.preventDefault(); //form use krne pr enter krne me bhi submit hota hai bina button press kiye
                                  //if when use form then not use preventDefault then show and suddenly remove and refresh page 
   
        setNname(text);
        setNname2(text2);
        setText('')
        setText2('')
        setBtns('i am go 🏃‍♀️ ')
        alert('subbmited form')
    }
  
 
  return (
    <>
        <div style={present}>
            {/* <form onSubmit={chang}  style={present} > */}
            <h1>Hello2 {name}{name2}</h1>

            <input
               style={input} 
               placeholder='Enter your name' 
               type="text"  
               value={text} 
               onChange={valuechange}  
               name="text" />
            <input 
               style={input} 
               placeholder='password' 
               type="password"  
               value={text2} 
               onChange={valuechange2}
               name="text" />
            <button onClick={chang} type='submit' style={btn}>{btns}</button>
            {/* </form> */}
        </div>
    </>

  )
}

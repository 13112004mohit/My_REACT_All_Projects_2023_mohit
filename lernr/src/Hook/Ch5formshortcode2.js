import React,{useState} from 'react'

export default function Ch5forms2() {

    const present={
        width:"100%",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#77b300",
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
      fname:"",
      lname:"",
      email:"",
      pass:""
    });
    
    
    const valuechange =(event)=>{
//  console.log( event.target.name)
//  console.log( event.target.value)

       const {value,name} = event.target;

        setText((preValue) => {
        //    console.log(preValue)
        if(name === 'fname'){
           return{
            fname:value,
            lname:preValue.lname,
            email:preValue.email,
            pass:preValue.pass,
           }
        }
        else  if(name === 'lname'){
            return{
                fname:preValue.fname,
                lname:value,
                email:preValue.email,
                pass:preValue.pass,
            }
         }
        else  if(name === 'email'){
            return{
                fname:preValue.fname,
                lname:preValue.lname,
                email:value,
                pass:preValue.pass,
            }
         }
        else  if(name === 'pass'){
            return{
            fname:preValue.fname,
            lname:preValue.lname,
            email:preValue.email,
            pass:value
            }
         }
        });
    };
    
    
    const chang =() =>{
        // event.preventDefault(); //form use krne pr enter krne me bhi submit hota hai bina button press kiye
                                  //if when use form then not use preventDefault then show and suddenly remove and refresh page 
        setText(text.fname);
        setText(text.lname)
        setText(text.email)
        setText(text.pass);
        // setBtns('i am go 🏃‍♀️ ')
        // alert('subbmited form')
    }
  
 
  return (
    <>
        <div style={present}>
            {/* <form onSubmit={chang}  style={present} > */}
            <h1>Hello2 {text.fname} {text.lname}  {text.email}  {text.pass}</h1>
            <input style={input}
             placeholder='Enter your name'
             type="text" 
              value={text.fname}
             onChange={valuechange} 
             name="fname" 
             />

            <input style={input}
             placeholder='last name'
             type="text"  value={text.lname} 
             onChange={valuechange}  
             name="lname"
              />
            <input style={input}
             placeholder='email'
             type="text"  value={text.email} 
             onChange={valuechange}  
             name="email"
              />
            <input style={input}
             placeholder='password'
             type="text"  value={text.pass} 
             onChange={valuechange}  
             name="pass"
              />
            <button onClick={chang} type='submit' style={btn}>btns</button>
            {/* </form> */}
        </div>
    </>

  )
}

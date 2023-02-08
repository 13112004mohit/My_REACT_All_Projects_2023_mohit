import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Error.css'


const Error=()=> {

    const navigate = useNavigate();

    const goback=()=>{
        navigate(-1)
    }

  return (
     <>
         <div className='errmain'>
             <h1>404 Page Error </h1>
             <h3>Sorry Page not exist </h3>
             <p>The Page you are looking for does not exist . How you got hare is a mystery but you can click the button below to go back to the homepage.</p>
             <button onClick={goback}>GoBack</button>
         </div>
     </>
  )
}
export default Error;
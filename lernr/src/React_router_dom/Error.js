import React from 'react'
import { useNavigate } from 'react-router-dom'


const Error=()=> {

    const navigate = useNavigate();

    const goback=()=>{
        navigate(-1)
    }

  return (
     <>
         <h1>404 Page Error </h1>
         <p>Sorry Page not exist </p>
         <button onClick={goback}>GoBack</button>
     </>
  )
}
export default Error;
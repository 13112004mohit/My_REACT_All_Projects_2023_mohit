import React,{useState,useEffect } from 'react';

const Effectmain=()=>{

   const [num,setNum] = useState(0);
   const [nums,setNums] = useState(0);

   useEffect(()=>{
    alert('i am clicked')
    document.title = `(${num})`;
    console.log(' i am clicked');
   },[num])


    return(
        <>

           <button onClick={()=>{
            setNum(num+1)
           }}>click effect {num} </button>
           
           <br/>

           <button onClick={()=>{
            setNums(nums+1)
           }}>click {nums} </button>

        </>
    )
}

export default Effectmain ;
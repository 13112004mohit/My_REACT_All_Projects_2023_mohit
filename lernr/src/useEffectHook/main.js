import React,{useState,useEffect } from 'react';

const Effectmain=()=>{

   const [num,setNum] = useState(0);
   const [nums,setNums] = useState(0);

    //💦 useEffect runs asynchronously and after a render is painted to the screen  
    //💦 The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    //💦 Why not to use useEffect? useEffect Hook is one of the most used Hooks in React, and it always runs on each re-render by default. However, this behaviour of cleaning up or applying the effect after each render can cause performance issues.
    //💦 What is the benefit of useEffect? The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects
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
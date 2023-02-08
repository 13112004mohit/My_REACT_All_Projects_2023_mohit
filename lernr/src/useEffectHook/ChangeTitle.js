import React,{useEffect,useState} from 'react';

const Title=()=>{

      const [num,setNum] = useState(0);

      useEffect(()=>{
          document.title = `you clicked ${num} times`;     
      })

    return(
        <>

             <button onClick={()=>{
                setNum(num+1);
             }}>
                click to change title  {num}
             </button>

        </>
    )
}

export default Title;
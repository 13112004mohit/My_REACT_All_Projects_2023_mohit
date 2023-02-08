import React,{useState} from 'react';

const style={
    color:'purple',
    padding:'200px 0 0 300px'
}
const btn={
    color:'purple',
    margin:'0px 0 0 350px',
    border:'none'
}
const  Clock =()=>{

    const  time  = new Date().toLocaleTimeString();
    const [currentime,setCurrenTime] = useState(time);

    const UpdateTime=()=>{
        const today = new Date().toLocaleTimeString();
        setCurrenTime(today)
    }

    // for Automatic Change Time 
    // setInterval(()=>{
    //    UpdateTime();   
    // },1000)

    // Whenever you click change Time
    const change =()=>{
       UpdateTime();
    }

    return(
       <>
             <h1 style={style}>{currentime}</h1>
             <button onClick={change} style={btn}>clicked</button>
       </>
    )
}

export default Clock;
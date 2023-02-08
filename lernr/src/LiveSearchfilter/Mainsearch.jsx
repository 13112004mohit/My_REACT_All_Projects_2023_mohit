import React,{ useState }  from 'react';
import './search.css'
import Sresult from './Sresult';

const  Live =()=>{

    const [img,setImg] = useState();
     
     const InputEvent =(event)=>{
        const data = event.target.value;
        setImg(data)
        console.log(data)
     }

     

    return(
        <>
        <div className='searchbar'>
              <input type="search" name="" value={img} onChange={InputEvent} placeholder='search'  />
        </div>

        <Sresult name={img}/>
        </>
    )
}

export default Live;
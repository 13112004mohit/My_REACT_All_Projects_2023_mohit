import React,{useState} from 'react';
import Header from './header';
import Texts from './textarea'


const Main =()=>{
    const [cart,setCart] = useState([])
    return(
     <>
        <Header/>
        <Texts cart={cart} setCart={setCart} />
     </>
    );
}

export default Main;
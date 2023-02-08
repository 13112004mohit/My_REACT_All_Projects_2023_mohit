import React,{useContext} from 'react';
import { Firstname,Lastname} from './ComApp';
// import ComC from './componenetC'

const ComB=() =>{
      
     const fname = useContext(Firstname) 
     const lname = useContext(Lastname) 

    return(
    <> 
             <h1>
                i am {fname} {lname}    using useContext_API
                <hr />
                {/* <ComC/> */}
             </h1>
           
    </>
    )}

    export default ComB;
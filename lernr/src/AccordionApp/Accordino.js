import React,{ useState } from 'react';
import './Accordino.css'
import {Apidata} from './Api';
import MyAccordion from './MyAccoridan';

const Accordino =()=>{
    // const [data,setData] = useState(Apidata);

     return (
     <>
     <section className="maindivv">
        <h1>Question & Answer</h1>
        {
                                       // data.map((curElem) =>{
            Apidata.map((curElem,index) =>{
                const {id} = curElem;
                return <MyAccordion key={id} {...curElem} />            
                // hmm props me destructuring kiye hai to yha se sperad operator ka use krke sidhe key:value send krde rhe hai

                //⬇⬇⬇ hmm props me props ka hi use kiye hai to yha sperad operator nhi use kiye hai aur wha obj destructuring nhi kiye hai 
                // return(
                //     <MyAccordion
                //      key={curElem.id} 
                //      que={curElem.question} 
                //      ans={curElem.answer} 
                //      />
                //     )

            })
        }
        </section>
     </>
     );   
}

export default Accordino;


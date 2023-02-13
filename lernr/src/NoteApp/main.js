import React,{useState} from 'react';
import Header from './header';
import Texts from './textarea'
import Note from './note';
import './note2.css'


const Main =()=>{
    const [addItem,setAddItem] = useState([]);
    
    const addNote = (note) =>{
        setAddItem((prevData)=>{
            return [...prevData, note];
        });
    };
    
    const onDelete=(id)=>{
       setAddItem((olddata)=>
       olddata.filter((e,index)=>{
        return index !==id;
       })
       );
    }
    
    return(
     <>
        <Header/>
        <Texts passNote={addNote}/>
        {/* <Note/> */}


        <div id='main'>
            <div id="maincontent">
      {  addItem.map((val,index) => {
                return <Note 
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deletItem ={onDelete}
                />
             })}
    </div>
          </div>
     </>
    );
}

export default Main;
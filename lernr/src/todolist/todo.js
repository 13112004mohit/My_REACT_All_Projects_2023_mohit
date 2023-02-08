import React, {useState} from 'react';
import "./todo.css"
import Tolist from './tolist';

export default function Todo() {

  const [inputList,setInputList] = useState('');
  const [Items,setItems] = useState([]);
    
    const itemEvent = (event) =>{
      setInputList(event.target.value)

      // console.log(event)
        //   onchange hole data ko  call krta hai onchange me sbhi kuchh hai */}
      // console.log(event.target)
      //   yha pr hmm onchange ko event me leye hai aur useme target ek attribute hai 
      //  console.log(event.target.value)
      // aur target me placehoder,type ,name and value krke bhut sare child attribute hai 
      // hmm yha only value kohi call kiye hai agar hmm target.text ya target.placeholer
      // lihi to wobhi aayega youcan check-->> |
      // console.log(event.target.placeholder)
    }
                     
    const listOfItems = ()=>{
         setItems((oldItems) => {
          return [...oldItems,inputList]
         });
         setInputList("")
    }
    
    const deletItems = (id)=>{
      setItems((oldItems)=>{
        return oldItems.filter((e,index)=>{
               return  index !==id;
        })
      })
  } 

  return (
 <>
     <div  className="main_div">
      <div className="center_div">
        <h1> ToDo List</h1>
        <br />
        <input type="text" onChange={itemEvent} value={inputList}  
                placeholder='           Add a Items      ' />
        <button onClick={listOfItems}> + </button>
        <hr />
        <div id='overdata'>
        <ol>

          {  Items.map((itemval,index) =>{
           return  (
            <Tolist
             key= {index}
             id={index}
             text={itemval}
             onSelect ={deletItems}
             />
             );
          })}
        </ol>

        </div>

      </div>
     </div>
 </>
  );
}


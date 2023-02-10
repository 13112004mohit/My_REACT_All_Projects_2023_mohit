import React,{ useReducer } from "react";

const initialState = 0;
const reducer = (state,action) =>{
        // console.log(state,action);
        if(action.type=== "INCREMENT"){
                return state+1;
        }else if(action.type==="DECREMENT" && state>0){
                return state-1;
        }
        
        return state;
}

const UseReducer =()=>{
        const [state,dispatch] = useReducer(reducer,initialState);

        return(
                <>
                   <div>
                        <p>{state}</p>
                        <div className="btnStylePOsition">  
                        {/* The dispatch function takes an action as its argument, and the action is passed to the reducer */}
                                <button onClick={()=>dispatch({type:"INCREMENT"})}>Inc</button>
                                <button onClick={()=>dispatch({type:"DECREMENT"})}>Dec</button>
                        </div>
                   </div>
                </>
        )
}

export default UseReducer;
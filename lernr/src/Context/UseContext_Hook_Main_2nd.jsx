import React,{ useContext, createContext} from 'react'


const AppContext = createContext();
const mydata={
        name:'mohit',
        age:'20',
        work:'Software Enginner',
        place:'Grater Noida'
}

const Context_Api_Main_2nd = ({children}) => {   //children name must be not wrong
  return (
    <>
         <AppContext.Provider value={mydata}>
               {children}
         </AppContext.Provider>
    </>
  )
}


const useGlobalContext =()=>{
        return useContext(AppContext)
  }

export default Context_Api_Main_2nd;
export {AppContext,useGlobalContext};

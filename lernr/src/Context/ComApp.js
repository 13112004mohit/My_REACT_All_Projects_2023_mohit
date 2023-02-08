import React, { createContext } from 'react';
import ComB from './componentB';
import ComC from './componenetC';

// Context and Props dono hi data ko pass krte hai 

const Firstname = createContext();
const Lastname = createContext();

const ComApp = () => {
   return (
      <>
         {/* yha pr hmm context & Props dono ko hi likhe hai to ye jbb bhi call hoga to context ko props ka aur
     props ko context ka data nhi millega you can see  Hiii! ke bad context me props ka aur props me context ka 
     data nhi dikh rha hai  */}
         <h1>-----------context --------------</h1>
         <Firstname.Provider value={'Mohit'}>
            <Lastname.Provider value={'Vishwakarma'}>
               <ComB /> 
               <ComC />
            </Lastname.Provider>
         </Firstname.Provider>


         <br /> <br /> <br /><hr />
         <h1>-------------Props----------------</h1>
         <ComC fname="mohit" lname='Vishwakarma' />
      </>
   )
}

export default ComApp;
export { Firstname, Lastname };
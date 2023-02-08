import React from 'react'

const ShortCircuitinreact = () => {
    // yha aap data useState ko ek bar empty me uar ek bar data fill krke dekhe (and || operator , && or operator ka use)
     const [demo,setDemo] = React.useState("");
  return (
    <>
    {/* yha pr or|| operator me agar true hota hai to mean demo me data hai to true hoga aur true huwa to demo ka
        data dikhe ga aur agar false huwa to Mohit  ___ AB && and operator me ek bhi false huwa to chlega hii 
          nhi aur true huwato student dhikhega demo ka data nhi dikhega*/}
         <h1> {demo || "Mohit"} </h1> 
         <h1> {demo && "student"} </h1> 
    </>
  )
}

export default ShortCircuitinreact;

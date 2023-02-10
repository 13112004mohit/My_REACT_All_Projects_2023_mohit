import React from 'react'
import { useLayoutEffect ,useEffect} from 'react';

const Layout_hook = () => {

        //💦 useLayoutEffect , runs synchronously after a render but before the screen is updated.
        //💦 When should we use useLayoutEffect?   When to use useLayoutEffect hook in React. The useLayoutEffect hook should be used when your component flickers when the state is updated, which means that it first renders in a partially-ready state before re-rendering in its final state right away. 
        
        //💦 aap aab yha console me difference dekh skte hai kitna bhi data ho phele useLayout ka data hi aa rha hai kuki ye screen display(painted) hone se phele hi run hojata hai BUT ye syncronous hai aur useEffect async hai isliye useEffect hi react me jada use hota hai but agar aap khi pr aise kuchh cha hte hai ki user ko display se phele hi wo display pr present rhe to aap us case me useLayout ka use krskte hai  


                useEffect(() => {
                   console.log("1st data using useLayoutEffect")
                }, []);
                useLayoutEffect(() => {
                   console.log("2nd data using useLayoutEffect")
                }, []);
                useEffect(() => {
                   console.log("3rd data using useLayoutEffect")
                }, []);

                     useEffect(() => {
                        console.log("1st data using useEffect")
                     }, []);
                     useEffect(() => {
                        console.log("2nd data using useEffect")
                     }, []);
                     useEffect(() => {
                        console.log("3rd data using useEffect")
                     }, []);

  return (
    <>
          <div>go and check in console</div>
    </>
  )
}

export default Layout_hook
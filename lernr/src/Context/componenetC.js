import React from 'react';
import { Firstname, Lastname } from './ComApp'

const ComC = (props) => {

  return (
    <>
      <Firstname.Consumer>
        {
          (fname) => {
            return (
              <Lastname.Consumer>
                {(lname) => {
                  return (
                    <h1>
                      Hiii! i am  🔗 {fname} {lname}  🔗createContext
                    </h1>
                  )
                }}
              </Lastname.Consumer>
            )
          }
        }
      </Firstname.Consumer>


      {/* /PROPS using  */}
      <h1><i> i am ♻ {props.fname} {props.lname} ♻props</i></h1>
    </> 
  )
}

export default ComC;
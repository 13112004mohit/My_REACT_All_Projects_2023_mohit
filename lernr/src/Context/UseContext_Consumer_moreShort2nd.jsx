import React from 'react'
import { useGlobalContext } from './UseContext_Hook_Main_2nd'

const Context_Api_Consumer_2nd = () => {

       const {name,place,work} = useGlobalContext();
  return (
    <>
          <b>
          Myname is 😀{name}😀 i am from  {place}<br />
                i am a {work}
          </b>
    </>
  )
}

export default Context_Api_Consumer_2nd
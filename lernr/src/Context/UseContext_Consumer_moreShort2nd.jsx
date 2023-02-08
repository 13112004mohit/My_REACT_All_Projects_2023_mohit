import React from 'react'
import { useGlobalContext } from './UseContext_Hook_Main_2nd'

const Context_Api_Consumer_2nd = () => {

       const data = useGlobalContext();
  return (
    <>
          <b>
                Myname is {data.name} i am from  <br />
                i am a {data.work}
          </b>
    </>
  )
}

export default Context_Api_Consumer_2nd
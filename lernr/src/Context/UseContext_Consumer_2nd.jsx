import React from 'react'
import { useContext } from 'react';
import {AppContext} from './UseContext_Hook_Main_2nd'

const Context_Api_Provider_2nd = () => {

       const data = useContext(AppContext)
  return (
    <>
        <p>
               
                Myname is {data.name} i am from  <br />
                i am a {data.work}
        </p>
    </>
  )
}

export default Context_Api_Provider_2nd;

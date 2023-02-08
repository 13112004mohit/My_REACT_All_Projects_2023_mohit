import React from 'react'
import { useContext } from 'react';
import {AppContext} from './UseContext_Hook_Main_2nd'

const Context_Api_Provider_2nd = () => {

       const mydata = useContext(AppContext)
  return (
    <>
        <p>
                Myname is 😀{mydata.name}😀 i am from  {mydata.place}<br />
                i am a {mydata.work}
        </p>
    </>
  )
}

export default Context_Api_Provider_2nd;

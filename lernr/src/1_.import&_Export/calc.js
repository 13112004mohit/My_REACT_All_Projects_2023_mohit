
import React from 'react'
import {add ,sub ,mul ,div }  from "./module2.mjs"

function sqr(n1){
  let  square = n1*n1;
    return square;
}
export default function calc() {
  return (
    <>
    <ul>
        <li>sum  of two no is {add(1,5)} </li>
        <li>subt of two no is {sub(10,5)} </li>
        <li>Mult of two no is {mul(10,5)}</li>
        <li>Div  of two no is {div(11,5)} </li>
        <li>square  of  no is {sqr(3)} </li>
    </ul>
    </>
  )
}

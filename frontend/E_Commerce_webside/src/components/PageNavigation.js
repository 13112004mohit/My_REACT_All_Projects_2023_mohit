import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <>
     <p> <NavLink  onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to='/'>Home</NavLink>/{title}</p>
    </>
  )
}

export default PageNavigation
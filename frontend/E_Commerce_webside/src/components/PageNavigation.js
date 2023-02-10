import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <>
     <p> <NavLink to='/'>Home</NavLink>/{title}</p>
    </>
  )
}

export default PageNavigation
import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../components/faculties_Cart'
import data from '../components/faclties_data'
import '../style/faculities.css' 

const Faculties = () => {
  return (
    <>
      <section className="faculties_m_con">
         <div className="facultiespg_F_con">
               <h1>Faculties</h1>
               <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/collegetemplete'}>Home </NavLink>Our best college faclties</p>
         </div>
      </section>

     <section className="faculties_Scon">
         <div className="faculties_Cart_con">
            {
              data.map((e,i)=>(
                <Cart
                    image={e.image}
                    name={e.Name}
                    profession={e.profession}
                    degree={e.degree}
                    heading={e.heading}
                    content={e.content}
                />
              ))
            }
         </div>
     </section>

    </>
  )
}

export default Faculties
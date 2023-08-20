import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../components/Services_Cart'
import '../style/services.css' 
import MetaData from '../components/layout/MetaData'
import { useSelector } from 'react-redux'

const Faculties = () => {
  const {services } = useSelector(
    (state) => state.admin
  );
  
  return (
    <>
      <MetaData title="Chitrakar-Services" />
      <section className="faculties_m_con">
         <div className="facultiespg_F_con">
               <h1>Services</h1>
               <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Home </NavLink>Our Best Services</p>
         </div>
      </section>

     <section className="faculties_Scon">
         <div className="faculties_Cart_con">
         {
          services &&  services.services.map((e, i) => (
                <Cart
                  image={e.image}
                  heading={e.heading}
                  description={e.description}
                />
              ))

       }

         </div>
     </section>

    </>
  )
}

export default Faculties
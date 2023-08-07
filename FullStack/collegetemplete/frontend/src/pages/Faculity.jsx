import React from 'react'
import '../style/faculity.css'
import { NavLink } from 'react-router-dom'
import Data from '../components/OurteamData'
import Cart from '../components/teamCart'

const Faculity = () => {
  return (
    <>
     <section className="team_m_con">
         <div className="team_F_con">
               <h1>Faculity</h1>
               <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Home </NavLink>Our Awesome Team</p>
         </div>
      </section>

     <section className="team_S_con">
         <div className="team_Cart_con">
         {
            Data.map((e, i) => (
                <Cart
                  image={e.image}
                  name={e.name}
                  work={e.work}
                  degree={e.degree}
                />
              ))

       }

         </div>
     </section>
    
  
  </>
  )
}

export default Faculity;
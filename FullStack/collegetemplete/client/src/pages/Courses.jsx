import React from 'react'
import { NavLink } from 'react-router-dom'
import Data from '../components/Courses_data'
import Cart from '../components/Courses_Cart'
import '../style/services.css' 

const Faculties = () => {
  return (
    <>
      <section className="faculties_m_con">
         <div className="facultiespg_F_con">
               <h1>Courses</h1>
               <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Home </NavLink>Our Best Courses</p>
         </div>
      </section>

     <section className="faculties_Scon">
         <div className="faculties_Cart_con">
         {
            Data.map((e, i) => (
                <Cart
                  image={e.image}
                  heading={e.heading}
                  content={e.content}
                  cat={e.category}
                  authorimg={e.authorimg}
                  authorname={e.authorname}
                  authorwork={e.authorwork}
                />
              ))

       }

         </div>
     </section>

    </>
  )
}

export default Faculties
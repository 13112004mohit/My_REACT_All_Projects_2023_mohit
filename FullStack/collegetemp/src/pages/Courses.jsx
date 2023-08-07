import React from 'react'
import '../style/packages.css';
import { NavLink } from 'react-router-dom'

import data from '../components/Courses_data'
import CourseCart from '../components/Course_Cart'

const Packages = () => {
 
  return (
    <>
       <section className="packages_m_con">
         <div className="packagespg_F_con">
               <h1>Our Courses</h1>
               <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/collegetemplete'}>Home </NavLink> Our Best Courses For You</p>
         </div>
       </section>
         <div className="packages__m_con">
              {
                data.map((e,i)=>(
                   <CourseCart
                    image={e.image}
                    heading={e.heading}
                    content={e.content}
                    duration={e.duration}
                    wintertime={e.wintertime}
                    summertime={e.summertime}
                    additionalpprice={e.additionalpprice}
                    services={e.services}
                    price={e.price}
                   />
                ))
              }
         </div>

    </>
  )
}

export default Packages;
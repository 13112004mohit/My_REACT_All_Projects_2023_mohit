import React from 'react'
import '../style/home_services.css'
import '../style/animatedbutton.css'
import { NavLink } from 'react-router-dom'
import Data from './blog_data'
import Cart from './blog_cart'

const HomeBlog = () => { 
  return (
    <>
      <section className="h_srvs_m_con">
        <div className="h_srvs_F_con">
           <h1 className="h_srvs_h1">Students Blog</h1>
           <p className="h_srvs_p">Our Blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa?</p>
        </div>

         
         <div className="courses_ddt">
           {
            Data.slice(0, 3).map((e, i) => (
                <Cart
                  image={e.image}
                  date={e.date}
                  heading={e.heading}
                  category={e.category}
                  authorimg={e.authorimg}
                />
              ))

       }
         </div>
       

         {/* button */} 
        <div class="container">
          <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/services'} className="btn">
            <svg id='svg'>
              <defs>
                  <linearGradient id="grad1">
                      <stop offset="0%" stop-color="#FF8282"/>
                      <stop offset="100%" stop-color="#E178ED" />
                  </linearGradient>
              </defs>
               <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" id='rect'></rect>
            </svg>
              <span>View All Blogs</span>
          </NavLink>
        </div>

      </section>
    </>
  )
}

export default HomeBlog
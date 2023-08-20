import React from 'react'
import '../style/home_services.css'
import '../style/animatedbutton.css'
import Cart from './blog_cart'
import { useSelector } from 'react-redux'

const borders ={
  margin:"-1.7rem 0 -5rem 0",
}

const HomeBlog = () => { 
  const {blogs } = useSelector(
    (state) => state.admin
  );
  return (
    <>
      <section className="h_srvs_m_con" style={borders}>
        <div className="h_srvs_F_con">
           <h1 className="h_srvs_h1">Painters Blog</h1>
           <p className="h_srvs_p">Our Blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa?</p>
        </div>

         
         <div className="courses_ddt">
           {
            blogs && blogs.blogs.slice(0, 3).map((e, i) => (
                <Cart
                   image={e.image}
                  date={e.createdAt}
                  heading={e.heading}
                  category={e.category}
                  notes={e.description}
                />
              ))

       }
         </div>
       

      </section>
    </>
  )
}

export default HomeBlog
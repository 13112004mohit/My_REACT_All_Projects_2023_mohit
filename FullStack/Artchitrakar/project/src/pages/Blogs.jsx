import React from 'react'
import '../style/notice.css'
import { NavLink } from 'react-router-dom'
import Cart from '../components/Blogpg'
import MetaData from '../components/layout/MetaData'
import { useSelector } from 'react-redux'

const Notice = () => {
  const {blogs } = useSelector(
    (state) => state.admin
  );
  
  return (
    <>
     <MetaData title="Chitrakar-Blog" />
     <section className="notice_m_con">
         <div className="notice_F_con">
               <h1>Our Blogs</h1>
               <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Home </NavLink>Important Notices</p>
         </div>
      </section>

     <section className="notice_S_con">
         <div className="notice_Cart_con">
         {
         
        blogs && blogs.blogs.map((e, i) => (
                <Cart
                  image={e.image}
                  author={e.createdby[0].name}
                  authorimg={e.createdby[0].image}
                  date={e.createdAt}
                  heading={e.heading}
                  category={e.category}
                  notes={e.description}
                  mobileNum={e.mobileNumber}
                />
              )) 
             
       }

         </div>
     </section>
    
  
  </>
  )
}

export default Notice;
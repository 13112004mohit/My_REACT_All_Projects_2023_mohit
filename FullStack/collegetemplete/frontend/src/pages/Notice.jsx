import React from 'react'
import '../style/notice.css'
import { NavLink } from 'react-router-dom'
import Data from '../components/NotesData'
import Cart from '../components/notescart'

const Notice = () => {
  return (
    <>
     <section className="notice_m_con">
         <div className="notice_F_con">
               <h1>Notice</h1>
               <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Home </NavLink>Important Notices</p>
         </div>
      </section>

     <section className="notice_S_con">
         <div className="notice_Cart_con">
         {
            Data.map((e, i) => (
                <Cart
                  title={e.title}
                  notice={e.notice}
                  date={e.date}
                  month={e.month}
                />
              ))

       }

         </div>
     </section>
    
  
  </>
  )
}

export default Notice;
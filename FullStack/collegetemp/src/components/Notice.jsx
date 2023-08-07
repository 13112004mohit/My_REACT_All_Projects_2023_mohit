import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillNotification} from 'react-icons/ai'
import { MdNotificationsActive} from 'react-icons/md';
import '../style/notices.css'

const Notice = () => {
  return (
    <>
         <div className="urnext_">
             <div className="bgccolor">
                  <div className="urnext_F_con">
                     <h1>Notice of the day </h1>
                     <p><AiFillNotification id='noteicon'/>Addmassion open next month of new students </p>
                     <p><AiFillNotification id='noteicon'/>In this month college will be close Kashi Tour</p>
                  </div>
                  <div className="urnext_2_con">
                    <NavLink  to={'/notices'} >
                        <button class="animated-button" style={{border:'none'}}>
                            <span>View All Notices <MdNotificationsActive id='forward_icon'/></span>
                        </button>
                     </NavLink>
                   </div>
               </div>
         </div>
    </>
  )
}

export default Notice
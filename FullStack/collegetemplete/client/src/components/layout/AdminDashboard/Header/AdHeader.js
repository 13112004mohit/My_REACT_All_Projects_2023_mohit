import React from 'react'
import Profile from '../../../profile/sidebar'
import './AdHeader.css'
import '../Sidebar/Sidbar.css'
import { useSelector } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
            
const AdHeader = ({isDrawerOpen, setIsDrawerOpen}) => {

  
  const {user} = useSelector((state) => state.user);
  return (
    <>
      <section className="header_main">
         <div className="header_twoSection">
                <div className="header_1section">
                <FiMenu
                  onClick={()=>  setIsDrawerOpen(true)}
                  className={`sidebar-addmenu ${isDrawerOpen ? "active" : ""}`}
                />
                </div>
                <div className="header_2section">
                        <div className="header_profile_2section">
                                <p className="profile_name">{user && user.name}</p>
                                <p className="profile_email">{user && user.email}</p>
                        </div>
                         <div className="profile_profile"><Profile/></div>
                                
                </div>
         </div>
      </section>
    </>
  )
}

export default AdHeader
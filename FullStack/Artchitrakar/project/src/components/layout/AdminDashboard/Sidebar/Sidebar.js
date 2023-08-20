import React, { useState } from "react";
import "./Sidbar.css";
import {
  MdOutlineDashboardCustomize,
  MdOutlineMiscellaneousServices,
  MdKeyboardArrowDown
} from "react-icons/md";
import { SiApostrophe, SiMicrosoftteams ,SiQatarairways} from "react-icons/si";
import { FaImages,FaEye, FaUserFriends ,FaPaintBrush} from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import logo from "../../../../assets/logo.png";

const Sidebar = ({ setActive, active, isDrawerOpen, setIsDrawerOpen }) => {
    const [showmenu,setShowmenu] = useState(null)


  return (
    <>
      <section className={`sidebar_main ${isDrawerOpen ? "active" : ""}`}>
        <CgClose
          className="sidebar-removemenu"
          onClick={() => setIsDrawerOpen(false)}
          style={{ display: isDrawerOpen ? "block" : "none" }}
        />
        <img
          style={{
            width: "8rem",
            height: "3rem",
            position: "absolute",
            top: "1rem",
            left: " 1.5rem",
          }}
          src={logo}
          alt=""
        />

        {/* Sidebar content buttons */}
      <div  className="sidebar_main_container">


      <p  id="seprator-line-dashboard" className="seprator-line">admin dashboard  </p>


          {/* DASHBOARD BUTTON  ----------------------- */}
               <div onClick={() => setActive(1)} className="button-menu">
                   <MdOutlineDashboardCustomize
                     style={active === 1 ? { color: "#ffffff" } : {}}
                     id="button-menu-icon"
                   />
                   <p
                     style={active === 1 ? { color: "#ffffff" } : {}}
                     id="button-menu-content"
                   >
                     {" "}
                     Dashboard
                   </p>
                 </div>




     <p id="seprator-line-website" className="seprator-line">website pages </p>
       


                {/* BLog MENU --------------------------- */}
                 <div  onClick={() => setShowmenu(showmenu ? null: 'blog')} className="drop-down-menu">
                   <p style={active === 3 || active === 4 ? { color: "#ffffff" } : {}} id="button-menu-content" >
                     <SiApostrophe  style={active === 3 || active === 4  ? { color: "#ffffff" } : {}} id="button-menu-icon" />
                     blogs 
                     <MdKeyboardArrowDown  style={active === 3 || active === 4 ? { color: "#ffffff" } : {}} id="drop-down-arrow" />
                   </p>
                   <p
                     onClick={() => setActive(3)}
                     style={showmenu==='blog' ? { display:'block'} : {}}
                     id="drop_menu"
                   >
                     Create Blog
                   </p>
                   <p
                     onClick={() => setActive(4)}
                     style={showmenu==='blog' ? { display:'block'} : {}}
                     id="drop_menu"
                   >
                     All Blogs
                   </p>
                 </div>
       


       
                {/* PAINTERS MENU ------------------------ */}
                 <div onClick={() => setShowmenu(showmenu ? null: 'painters')} className="drop-down-menu">
                   <p style={active === 5 || active === 6 ? { color: "#ffffff" } : {}} id="button-menu-content" >
                     <SiMicrosoftteams  style={active === 5 || active === 6 ? { color: "#ffffff" } : {}} id="button-menu-icon" />
                     Painters 
                     <MdKeyboardArrowDown  style={active === 5 || active === 6 ? { color: "#ffffff" } : {}} id="drop-down-arrow" />
                   </p>
                   <p
                     onClick={() => setActive(5)}
                     style={showmenu==='painters' ? { display:'block'} : {}}
                     id="drop_menu"
                   >
                      Add Painters
                   </p>
                   <p
                     onClick={() => setActive(6)}
                     style={showmenu==='painters' ? { display:'block'} : {}}
                     id="drop_menu"
                   >
                     All Painters
                     </p>
                 </div>
       
       
       
                {/* SERVICES MENU ------------------------ */}
                 <div onClick={() => setShowmenu(showmenu ? null: 'services')}  className="drop-down-menu">
                   <p style={active === 7 || active === 8 ? { color: "#ffffff" } : {}} id="button-menu-content" >
                     <MdOutlineMiscellaneousServices  style={active === 7 || active === 8 ? { color: "#ffffff" } : {}} id="button-menu-icon" />
                     Services 
                     <MdKeyboardArrowDown  style={active === 7 || active === 8 ? { color: "#ffffff" } : {}} id="drop-down-arrow" />
                   </p>
                   <p
                     onClick={() => setActive(7)}
                     style={showmenu==='services' ? { display:'block'} : {}}
                     id="drop_menu"
                   >
                      Add Services
                   </p>
                   <p
                     onClick={() => setActive(8)}
                     style={showmenu==='services' ? { display:'block'} : {}}
                     id="drop_menu"
                   >
                     All Services
                   </p>
                 </div>
       
       
       
                {/* IMAGES MENU ------------------- */}
                 <div onClick={() => setShowmenu(showmenu ? null: 'images')}  className="drop-down-menu">
                   <p style={active === 9 || active === 10 ? { color: "#ffffff" } : {}} id="button-menu-content" >
                     <FaImages  style={active === 9 || active === 10 ? { color: "#ffffff" } : {}} id="button-menu-icon" />
                     Images 
                     <MdKeyboardArrowDown  style={active === 9 || active === 10 ? { color: "#ffffff" } : {}} id="drop-down-arrow" />
                   </p>
                   <p
                     onClick={() => setActive(9)}
                     style={showmenu==='images' ? { display:'block'} : {}}
                     id="drop_menu"
                   >
                      Add Image
                   </p>
                   <p
                     onClick={() => setActive(10)}
                     style={showmenu==='images' ? { display:'block'} : {}}
                     id="drop_menu"
                   >
                     All Images
                   </p>
                 </div>
       
       
                {/* Banners MENU ------------------- */}
                 <div onClick={() => setShowmenu(showmenu ? null: 'banners')}  className="drop-down-menu">
                   <p style={active === 11 ? { color: "#ffffff" } : {}} id="button-menu-content" >
                     <SiQatarairways  style={active === 11  ? { color: "#ffffff" } : {}} id="button-menu-icon" />
                     Banners 
                     <MdKeyboardArrowDown  style={active === 11 ? { color: "#ffffff" } : {}} id="drop-down-arrow" />
                   </p>
                   <p
                     onClick={() => setActive(11)}
                     style={showmenu==='banners' ? { display:'block'} : {}}
                     id="drop_menu"
                   >
                     All banner
                   </p>
                 </div>
       
       
                {/* PAINTINGS MENU ------------------- */}
                 <div onClick={() => setShowmenu(showmenu ? null: 'paintings')}  className="drop-down-menu">
                   <p style={active === 12  ? { color: "#ffffff" } : {}} id="button-menu-content" >
                     <FaPaintBrush  style={active === 12 ? { color: "#ffffff" } : {}} id="button-menu-icon" />
                     Paintings 
                     <MdKeyboardArrowDown  style={active === 12  ? { color: "#ffffff" } : {}} id="drop-down-arrow" />
                   </p>
                   <p
                     onClick={() => setActive(12)}
                     style={showmenu==='paintings' ? { display:'block'} : {}}
                     id="drop_menu"
                   >
                     All Paintings
                   </p>
                 </div>
       
                   {/*USERS BUTTON-------------  */}
                 <div onClick={() => setActive(13)} className="button-menu">
                   <FaUserFriends
                     style={active === 13 ? { color: "#ffffff" } : {}}
                     id="button-menu-icon"
                   />
                   <p
                     style={active === 13 ? { color: "#ffffff" } : {}}
                     id="button-menu-content"
                   >
                     {" "}
                     Users
                   </p>
                 </div>

                        
       
     <p id="seprator-line-view" className="seprator-line">view website page </p>
                 
                 {/* HOME BUTTON---------------------- */}
                <div onClick={() => setActive(2)} className="button-menu">
                  <FaEye
                    style={active === 2 ? { color: "#ffffff" } : {}}
                    id="button-menu-icon"
                  />
                  <p
                    style={active === 2 ? { color: "#ffffff" } : {}}
                    id="button-menu-content"
                  >
                    {" "}
                    View Site
                  </p>
                </div>
      
          </div>
      </section>
    </>
  );
};

export default Sidebar;

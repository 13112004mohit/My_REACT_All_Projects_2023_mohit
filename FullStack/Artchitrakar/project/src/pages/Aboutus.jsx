import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/About.css'
import '../style/animatedbutton.css'
import Twoside from '../components/Twoside'
import Video from '../components/Video'
import {LuCheckCircle} from 'react-icons/lu'
import MetaData from '../components/layout/MetaData'


const abt_1 = "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBhaW50fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
const abt_2 = "https://images.unsplash.com/photo-1588581282844-4c6eea7bd3d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxza2V0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"


const Aboutus = () => {
  return (
    <>
 <MetaData title="Chitrakar-About" />
     <section className="faculties_m_con" id='About_m_con' >
         <div className="facultiespg_F_con">
               <h1>About</h1>
               <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Home </NavLink>We have 25 years experience </p>
         </div>
      </section>

      <section className="abt_m_S_con">
             

           <section className="h_about_m_con">
              <div className="two_col_abt">
                   
                    <div className="h_S_abt_">
                       <p className='pabout_'><a href="tel:+">Welcome to our Art Gallery</a></p>
                       <h1>EXPLORE THE WORLD OF ART</h1>
                       <p className="hsa_small">With over 25 years of experience in curating and showcasing exceptional artwork, our art gallery is a hub for artistic expression and creativity. We believe in learning with love and laughter, creating an immersive and enjoyable experience for art enthusiasts of all ages.</p>
                       <div className="hcon_btn_abt">
                        
                         <div className="abt_sht_boxs">
                           <div className="icon_check"> <LuCheckCircle id='forward_icon_abt'/></div>
                           <div className="abt_sht_datas">
                             <h1>A WIDE COLLECTION OF MASTERPIECES</h1>
                             <p>Our gallery features a diverse collection of artwork, ranging from classical to contemporary styles. </p>
                           </div>
                         </div>
                         <div className="abt_sht_boxs">
                           <div className="icon_check"> <LuCheckCircle id='forward_icon_abt'/></div>
                           <div className="abt_sht_datas">
                             <h1>JOIN OUR ARTISTIC COMMUNITY</h1>
                             <p>In addition to showcasing renowned artists, we also support emerging talents, providing them with a platform to showcase their work.</p>
                           </div>
                         </div>

                       </div>
                    </div>
                    <div className="h_F_abt_">
                         <img id='layer1' src={abt_1} alt="" />
                         <img id='layer2' src={abt_2} alt="" />
                    </div>
              </div>
           </section>


         <Twoside/>
         <Video/>
        
      </section>
    
    </>
  )
}

export default Aboutus
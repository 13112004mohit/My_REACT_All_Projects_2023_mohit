import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/About.css'
import '../style/animatedbutton.css'
import {RiCheckboxMultipleFill} from 'react-icons/ri'


const abt_2 = "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=600"
const cimg1 = "https://images.pexels.com/photos/3783116/pexels-photo-3783116.jpeg"
const cimg2 = "https://images.pexels.com/photos/4498483/pexels-photo-4498483.jpeg?auto=compress&cs=tinysrgb&w=600"



const Aboutus = () => {
  return (
    <>

     <section className="faculties_m_con" id='About_m_con' >
         <div className="facultiespg_F_con">
               <h1>About</h1>
               <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Home </NavLink>We have 25 years experience </p>
         </div>
      </section>

      <section className="abt_m_S_con">
             <div className="contact_small_info_htl">
                <div className="contact_small_info_htl_F">
                   <div className="small_info_image_con">
                      <img src={cimg1} alt="recption" />  
                   </div>
                   <div className="small_info_htl_data">
                     <h1> Open 10am to 4pm</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a illo alias autem aspe</p>
                     <a id='data_' href="tel:+">91+0712377764</a>
                   </div>
                </div>
                <div className="contact_small_info_htl_F">
                   <div className="small_info_image_con">
                   <img src={cimg2} alt="recption" /> 
                   </div>
                   <div className="small_info_htl_data">
                     <h1>Scholership programm</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corporis ipsam quidem co</p>
                     <a id='data_' href="mailto:">mohit7007@gmail.com</a>
                   </div>
                </div>
             </div>

           <section className="h_about_m_con">
              <div className="two_col_abt">
                    <div className="h_F_abt_">
                         <img src={abt_2} alt="" />
                    </div>
                    <div className="h_S_abt_">
                       <p className='pabout_'><a href="tel:+">We Have 25 Year's Experience</a></p>
                       <h1>LEARNING WITH LOVE AND LAUGHTER</h1>
                       <p className="hsa_small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also</p>
                       <div className="hcon_btn_abt">
                        
                         <div className="abt_sht_boxs">
                           <div className="icon_check"> <RiCheckboxMultipleFill id='forward_icon_abt'/></div>
                           <div className="abt_sht_datas">
                             <h1>Qulified Teachers</h1>
                             <p>Expreience Teachers</p>
                           </div>
                         </div>
                         <div className="abt_sht_boxs">
                           <div className="icon_check"> <RiCheckboxMultipleFill id='forward_icon_abt'/></div>
                           <div className="abt_sht_datas">
                             <h1>Lots of Team</h1>
                             <p>More then 50</p>
                           </div>
                         </div>

                       </div>
                    </div>
              </div>
           </section>


         
        
      </section>
    
    </>
  )
}

export default Aboutus
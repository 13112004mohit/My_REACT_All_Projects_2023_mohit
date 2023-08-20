import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {MdEmail,MdPhoneAndroid} from 'react-icons/md'
import {RiArrowRightSFill} from 'react-icons/ri'
import {FaFacebookF,  FaTwitter,FaWhatsapp,FaInstagram,FaYoutube} from 'react-icons/fa'

import '../style/footer.css'


import logo from '../assets/logo.png'
import footerimg2 from '../assets/1.avif'
import footerimg3 from '../assets/3.avif'
import footerimg4 from '../assets/2.avif'
import footerimg5 from '../assets/13.avif'

const Footer = () => {
  return (
    <>
           <div className="footer_m_con">

               <hr  id='footerhr'/> 

               <div className="footer_four_col_">

                  <div className="footer_col1">
                       <img src={logo} alt="brand" />
                       <p id='col_1_p2'>Welcome to the Pomona College where the age old Indian tradition of "Atithi Devo Bhava" which means "Guest is God" a way of life & where</p>
                       <p id='col_1_p3'>Copyright &copy; 2023 All rights reserved.</p>
                  </div>

                  <div className="footer_col2">
                        <h3>LATEST WORKS </h3>
                         <div className="footer_garrary">
                              <div className="footerimg2_box">
                                <img src={footerimg2} alt="footerimg2" />
                              </div>
                              <div className="footerimg2_box">
                                <img src={footerimg3} alt="footerimg2" />
                              </div>
                              <div className="footerimg2_box">
                                <img src={footerimg4} alt="footerimg2" />
                              </div>
                              <div className="footerimg2_box">
                                <img src={footerimg5} alt="footerimg2" />
                              </div>
                         </div>
                  </div>

                  <div className="footer_col3">
                     <h3>GET IN TOUCH</h3>
                     <p className='footer_col3_p'><RiArrowRightSFill id='leftarrow_'/>Qualified Painters</p>
                     <p className='footer_col3_p'><RiArrowRightSFill id='leftarrow_'/>Best Painting Materials</p>
                     <p className='footer_col3_p'><RiArrowRightSFill id='leftarrow_'/>Organised Porgramm</p>
                     <p className='footer_col3_p'><RiArrowRightSFill id='leftarrow_'/>Good Helpers</p>
                     <p className='footer_col3_p'><RiArrowRightSFill id='leftarrow_'/>Better Carliography</p>
                     <p className='footer_col3_p'><RiArrowRightSFill id='leftarrow_'/>Make a meaningful paint</p>
                    
                  </div>

               {/* footer col4 */}
                  <div className="footer_col4">
                     <h3>CONTACT US</h3>
                     <p> elit. Ullam ut dolorem laboriosam inventore. Fugit necessitatibus dolores provident ab error aut!</p>
                     <span id='footer_location_data'><MdLocationOn id='footersmallinfo_icon'/> Varanasi bhu near ,276204</span><br />
                     <span><MdPhoneAndroid id='footersmallinfo_icon'/><a href="tel:8726274444"> +91 8997007187</a></span> <br />
                     <span><MdEmail id='footersmallinfo_icon'/> <a href="mailto:info@shrishaktimayi.com">infomohit13112005@gmail.com</a></span> 
                
                     <div className="socalicon">
                         <a target='_blank'  rel="noreferrer" href="https://wa.me/8726274444"><FaWhatsapp  /></a>
                         <a target='_blank' href="/"><FaFacebookF /></a>
                         <a target='_blank' href="/"><FaInstagram /></a>
                         <a target='_blank' href="/"><FaTwitter/></a>
                         <a target='_blank' href="/"><FaYoutube   /></a>
                     </div>
                  </div>

               </div>

               <hr  id='footerhr'/> 
                  <div className="footer_navbar_">
                      <ul>
                         <li> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Home</NavLink></li>
                         <li> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/about'}>About</NavLink></li>
                         <li> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/services'}>Services</NavLink></li>
                         <li> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/faculity'}>OurTeam</NavLink></li>
                         <li> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/gallery'}>Gallery</NavLink></li>
                         <li> <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/blogs'}>Blogs</NavLink></li>
                      </ul>
                  </div>
               <hr  id='footerhr'/> 
            </div>   
                 
    </>
  )
}

export default Footer
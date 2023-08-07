import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {FaLongArrowAltRight} from 'react-icons/fa'
import {RiArrowRightSFill} from 'react-icons/ri'
import { RiInstagramFill } from 'react-icons/ri';
import {FaFacebookF,FaPhoneAlt,FaWhatsapp,  FaTwitter,FaYoutube} from 'react-icons/fa'

import '../style/footer.css'


import logof from '../assets/logof.png'


const Footer = () => {
  return (
    <>
           <div className="footer_m_con">

               <div className="footer_four_col_">
                  <div className="footer_col1">
                       <p id='col_1_p1'> </p>
                       <img src={logof} alt="brand" />
                       <p id='col_1_p2'>Suspendisse non sem ante. Cras pretium gravida leo a convallis. Nam malesuada interdum metus, sit amet dictum ante congue eu. Maecenas ut maximus enim.</p><br />
                       <p id='col_1_p3'>More about us <FaLongArrowAltRight id='col_1_arrow'/></p>
                  </div>


                  <div className="footer_col4">
                     <h3>Quick Links</h3>
                        <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}><RiArrowRightSFill id='leftarrow_'/>HOME</NavLink>
                        <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/about'}><RiArrowRightSFill id='leftarrow_'/>ABOUT</NavLink>
                        <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/courses'}><RiArrowRightSFill id='leftarrow_'/>COURSES</NavLink>
                        <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/faculity'}><RiArrowRightSFill id='leftarrow_'/>FACULITY</NavLink>
                        <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/gallery'}><RiArrowRightSFill id='leftarrow_'/>GALLERY</NavLink>
                        <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/notice'}><RiArrowRightSFill id='leftarrow_'/>NOTICE</NavLink>
                        <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/contact'}><RiArrowRightSFill id='leftarrow_'/>CONTACT</NavLink>

                  </div>

                  <div className="footer_col4" >
                     <h3>Socal media</h3>
                        <a href='whatsapp:7007187764'><FaWhatsapp id='socalicon'/> Whatsapp</a>
                        <a href='https://www.facebook.com'><FaFacebookF id='socalicon'/> Facebook</a>
                        <a href='https://www.instagram.com'><RiInstagramFill id='socalicon'/> Instagram</a>
                        <a href='https://'><FaTwitter id='socalicon'/> Twitter</a>
                        <a href='https://www.youtube.com'><FaYoutube id='socalicon'/> Youtube</a>
                  </div>


                  <div className="footer_col3">
                        <h3>Contact us</h3><br />
                        <div className="footer_col_3_F_">
                             <FaPhoneAlt id='contacticon'/>
                             <div className="footer_col_3_F_data">
                               <a href="tel:+">(444) 000-8888</a>
                               <a href="tel:+">7052 101 786</a>
                             </div>
                        </div>   
                        <div className="footer_col_3_F_">
                             <MdEmail id='contacticon'/>
                             <div className="footer_col_3_F_data">
                               <a href="mail:">qeducatoofeduc@example.com</a>
                               <a href="mail:">mohit13112004@example.com</a>
                             </div>
                        </div>  
                        <div className="footer_col_3_F_">
                             <MdLocationOn id='contacticon'/>
                             <div className="footer_col_3_F_data">
                               <a href="/">1247/Plot No. 39, 15th Phase,</a>
                               <a href="/">LHB Colony, Kanpur</a>
                             </div>
                        </div>   
                  </div>

               <p id='copyright'>Copyright © 2020 TAIC- All Rights Reserved.</p>
               </div>
               
            </div> 
    </>
  )
}

export default Footer
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Contact.css' 
import {IoIosArrowForward} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
import {FaMapMarkerAlt, FaFacebookF,FaInstagram,FaPhoneAlt,FaYoutube ,FaWhatsapp,FaBattleNet} from 'react-icons/fa'
import { Tooltip ,Button} from '@chakra-ui/react'
import map from '../assets/map.png';

const About = () => {
  return (
    <>
     <section className="contact_m_con">
         <div className="contactpg_F_con">
               <h1>Contact us</h1>
               <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/collegetemplete'}>Home </NavLink>for any concern contact us</p>
         </div>
      </section>

      <div className="conact_m_S_con">
          <div className="Fcon_contact">
             <h1>Make Appointment</h1>
            <div className="contact_icons_datas">
                     <div className="info_con_box_three">
                         <div className="info_inner_box">
                           <div className="info_icon_box"><FaPhoneAlt className='info_icon'/></div>
                           <p><a className="info_heading_" href="tel:+7007187763">807177763</a></p>
                           <p className="info_nameing">Phone Support</p>
                         </div>
                         <div className="info_inner_box">
                           <div className="info_icon_box"><MdEmail className='info_icon'/></div>
                           <p><a className="info_heading_" href="mail:socity">socalmedia7947@gmail.com</a></p>
                           <p className="info_nameing">Email Address</p>
                         </div>
                         <div className="info_inner_box">
                           <div className="info_icon_box"><FaMapMarkerAlt className='info_icon'/></div>
                           <p><a className="info_heading_" href="/">12/A, New Jone, NYC</a></p>
                           <p className="info_nameing">Office Address</p>
                         </div>
                     </div>
                     <div className="contact_gettch_Fst_data" >
                         <p><FaBattleNet className='gettchicon'/><b>  Socal media Links </b> <IoIosArrowForward  style={{marginLeft:'0rem'}} className='gettarrow'/> 

                       <Tooltip hasArrow label='Whatsapp' bg='whatsapp.600' placement='bottom'>
                             <a href="whatsapp:9839136949">
                               <Button  leftIcon={ <FaWhatsapp id='sociconsize'/> }  size='sm' colorScheme='whatsapp' ml={2} mr={2}>
                                 <span id="whats">Whatsapp</span>
                               </Button>
                             </a>
                           </Tooltip>   
                          <Tooltip hasArrow label='facebook' bg='facebook.600'>
                            <a href="https://www.facebook.com/TheKashiTour/">
                              <Button leftIcon={ <FaFacebookF id='sociconsize'/> } size='sm' colorScheme='facebook' >
                                <span id="whats">Facebook</span>
                              </Button>
                            </a>
                          </Tooltip>
                          <Tooltip hasArrow label='Instagram' bg='purple.600' >
                            <a href="https://www.instagram.com/TheKashiTour/">
                              <Button leftIcon={ <FaInstagram id='sociconsize'/> } size='sm' colorScheme='purple' ml={2} mr={2} >
                                 <span id="whats">Instagram</span>
                              </Button>
                            </a>
                          </Tooltip>
                           <Tooltip hasArrow label='youtube' bg='red.600' placement='right'>
                             <a href="https://www.youtube.com/TheKashiTour">
                               <Button leftIcon={ <FaYoutube id='sociconsize'/> } size='sm' colorScheme='red'>
                                 <span id="whats">Youtube</span>
                               </Button>
                             </a>
                           </Tooltip>
                          
                         </p>
                     </div>
             </div>
          </div>

          <div className="Scon_contact">
            <a href="/">
            <div className="contact_img_con">
               <img src={map} alt="" />
             </div>
            </a>  
          </div>
      </div>


    </>
  )
}

export default About
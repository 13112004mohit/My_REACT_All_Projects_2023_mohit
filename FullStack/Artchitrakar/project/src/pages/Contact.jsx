import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Contact.css";
import '../style/animatedbutton.css';
import {MdOutlineDoubleArrow,MdOutlineEmail,MdPermPhoneMsg} from 'react-icons/md'
import {BiMap} from 'react-icons/bi'
import { FaWhatsapp} from 'react-icons/fa';

import map from "../assets/map.png";
import MetaData from "../components/layout/MetaData";
import { useSelector } from "react-redux";

const About = () => {
  const {admininfo} = useSelector(
    (state) => state.admin
  );


 
  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };
 

  return (
    <>
     <MetaData title="Chitrakar-Contact" />
      <section className="contact_m_con">
        <div className="contactpg_F_con">
          <h1>Contact us</h1>
          <p>
            <NavLink
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
              to={"/thekashitour"}
            >
              Home{" "}
            </NavLink>
            for any concern contact us
          </p>
        </div>
      </section>
      <div className="conact_m_S_con">
        
          <div className="contact_gettouch_m_con">
            <div className="contact_gettouch_S_con">
                <div className="contact_gettch_Fst_data">
                   <p><BiMap  className='gettchicon'/><b> Address</b> <MdOutlineDoubleArrow className='gettchicon'/><a rel="noreferrer" target='_blank' href="https://www.google.com/maps/">{admininfo && admininfo.admininfo.address}</a></p>
                </div>
                <div className="contact_gettch_Fst_data">
                  <p><MdPermPhoneMsg className='gettchicon'/><b> Phone </b> <MdOutlineDoubleArrow style={{marginLeft:'.8rem'}} className='gettchicon'/> <a  href={`tel:+${admininfo && admininfo.admininfo.phoneNumber}`}>{admininfo && admininfo.admininfo.phoneNumber}</a></p>
                </div>
                <div className="contact_gettch_Fst_data">
                  <p><MdOutlineEmail className='gettchicon'/><b> Email </b> <MdOutlineDoubleArrow style={{marginLeft:'1.1rem'}} className='gettchicon'/> <a rel="noreferrer" target="_blank"  href={`mailto:${admininfo && admininfo.admininfo.email}`}>{admininfo && admininfo.admininfo.email}</a></p>
                </div>
                <div className="contact_gettch_Fst_data" >
                  <p><FaWhatsapp className='gettchicon'/><b> Whatsapp </b> <MdOutlineDoubleArrow style={{marginLeft:'0rem'}} className='gettchicon'/> <a rel="noreferrer" target="_blank" href={`https://wa.me/${admininfo && admininfo.admininfo.phoneNumber}`}> Chat with us</a></p>
                </div>
            </div>
            <div className="contact_gettouch_F_con">
               <p id='contactshow'>contact US</p>
               <h1>Get In Touch</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio magni eum nisi deserunt? Quo inventore dolore qui quos, debitis ex id error illum necessitatibus soluta mollitia doloribus ipsam quidem recusandae distinctio molestiae consectetur.</p>


               <NavLink id='a' onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/services'}>
                   <span>Services</span>
                   <div class="liquid"></div>
               </NavLink>


            </div>
          </div>
          <div className="contact_img_con">
            <img src={map} alt="" />
          </div>
      </div>

      <hr />
      <div >
      </div>
    </>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';
import '../style/animatedbutton.css';
import { CgClose } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';
import { RiInstagramFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import {
  FaFacebookF,
  FaPhoneAlt,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const menushow = () => {
    const nav = document.getElementById('nav_twoCol');
    const addmenu = document.getElementById('addmenu');
    const removemenu = document.getElementById('removemenu');
    nav.classList.add('active');
    addmenu.classList.add('active');
    removemenu.classList.add('active');
  };

  const menuclose = () => {
    const navcls = document.getElementById('nav_twoCol');
    const addmenu = document.getElementById('addmenu');
    const removemenu = document.getElementById('removemenu');
    navcls.classList.remove('active');
    addmenu.classList.remove('active');
    removemenu.classList.remove('active');
  };

  return (
    <>
      {/* small info header */}
      <div className="smalinfo_sh">
        <div className="emlphone_sh">
          <span>
            <MdEmail id="smallinfo_icon" />{' '}
            <a href="mailto:info@reen.com">mohit13112004@gmail.com</a>
          </span>
          <span>
            <FaPhoneAlt id="smallinfo_icon" />
            <a href="tel:+ +00(123)4567890"> +00 (123) 456 78 90</a>
          </span>
        </div>
        <div className="socallogo_sh">
          <div class="animated-button wh">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>
                <FaWhatsapp className="animated_icon" />
              </span>
            </a>
          </div>
          <div class="animated-button fb">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>
                <FaFacebookF className="animated_icon" />
              </span>
            </a>
          </div>
          <div class="animated-button insta">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>
                <RiInstagramFill className="animated_icon" />
              </span>
            </a>
          </div>
          <div class="animated-button twitter">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>
                <FaTwitter className="animated_icon" />
              </span>
            </a>
          </div>
          <div class="animated-button youtube">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>
                <FaYoutube className="animated_icon" />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* header secion */}
      <section
        className={scroll ? 'navcontainer_AS' : 'navcontainer_BS'}
        id="nav_m_container"
      >
        <div className={scroll ? 'navlogo_AS' : 'navlogo_BS'} id="nav_logo">
          <NavLink
            to={'/'}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
              menuclose();
            }}
          >
            <img className="navbar_logo" src={logo} alt="" />
          </NavLink>
        </div>

        <div id="nav_twoCol">
          <ul id="nav_ul">
            <li>
              <NavLink
                className={scroll ? 'nav_a_AS' : 'nav_a_BS'}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                  menuclose();
                }}
                to={'/'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={scroll ? 'nav_a_AS' : 'nav_a_BS'}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                  menuclose();
                }}
                to={'/about'}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={scroll ? 'nav_a_AS' : 'nav_a_BS'}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                  menuclose();
                }}
                to={'/courses'}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                className={scroll ? 'nav_a_AS' : 'nav_a_BS'}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                  menuclose();
                }}
                to={'/faculity'}
              >
                Our Faculity
              </NavLink>
            </li>
            <li>
              <NavLink
                className={scroll ? 'nav_a_AS' : 'nav_a_BS'}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                  menuclose();
                }}
                to={'/gallery'}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                className={scroll ? 'nav_a_AS' : 'nav_a_BS'}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                  menuclose();
                }}
                to={'/notice'}
              >
                Notice
              </NavLink>
            </li>
            <li>
              <NavLink
                className={scroll ? 'nav_a_AS' : 'nav_a_BS'}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                  menuclose();
                }}
                to={'/contact'}
              >
                Contact
              </NavLink>
            </li>
          </ul>



            {/* logo at mobile navbar */}
              <div id="nav_logo_mobile">
                <NavLink
                  to={'/'}
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                    menuclose();
                  }}
                >
                  <img id="nav_logo" src={logo} alt="" />
                </NavLink>
              </div>

            {/* mobile contact and mail also socal icons*/}
               <div id="contact_mobile_">
                  <a  href="tel:7007187764">
                     <div className="contact_button">
                           <FaPhoneAlt id="smallinfo_icon_mobile" /> 
                           <p className="mobile_content">Call</p>
                     </div>
                   </a>
                   <a href="mailto:mohit@gamil.com">
                     <div className="contact_button">
                           <MdEmail id="smallinfo_icon_mobile" /> 
                           <p className="mobile_content">Email</p>
                     </div>
                   </a>
                  
               </div>

             {/* socal icons */}
             <div className="socallogo_sh__con_mob">
               <div class="animated-button wh">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <span>
                      <FaWhatsapp className="animated_icon" />
                    </span>
                  </a>
                </div>
                             
               <div class="animated-button fb">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <span>
                      <FaFacebookF className="animated_icon" />
                    </span>
                  </a>
                </div>
                                     
               <div class="animated-button insta">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <span>
                      <RiInstagramFill className="animated_icon" />
                    </span>
                  </a>
                </div>
                                     
               <div class="animated-button twitter">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <span>
                      <FaTwitter className="animated_icon" />
                    </span>
                  </a>
                </div>
                                     
               <div class="animated-button youtube">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <span>
                      <FaYoutube className="animated_icon" />
                    </span>
                  </a>
                </div>
                                     
             </div>
        </div>

        <FiMenu id="addmenu" onClick={menushow} />
        <CgClose id="removemenu" onClick={menuclose} />
      </section>
    </>
  );
};

export default Navbar;

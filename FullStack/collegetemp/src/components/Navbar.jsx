import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';
import { CgClose } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';
import { RiInstagramFill } from 'react-icons/ri';
import { MdNotificationsActive} from 'react-icons/md';
import {
  FaFacebookF,
  FaPhoneAlt,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';


import logo from '../assets/logo.png';
import mailing from '../assets/mailing.png';
import phone from '../assets/phone.png';

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

  // window.addEventListener('click',menuclose());

  return (
    <>
      {/* small info header */}
      <div className="smalinfo_sh">
        <div className="smalinfo_sh_first_con"></div>
        <div className="smalinfo_sh_second_con">
          <div className="socallogo_sh__con">
            <p>Follow us:- </p>
            <span>
              <a href="whatsapp:7007197764" target={'_blank'}>
                <FaWhatsapp id="smallinfo_icon" />
              </a>
            </span>
            <span>
              <a href="/">
                <FaFacebookF id="smallinfo_icon" />
              </a>
            </span>
            <span>
              <a href="/">
                <RiInstagramFill id="smallinfo_icon" />
              </a>
            </span>
            <span>
              <a href="/" target={'_blank'}>
                <FaTwitter id="smallinfo_icon" />
              </a>
            </span>
            <span>
              <a href="/">
                <FaYoutube id="smallinfo_icon" />
              </a>
            </span>
          </div>
          <div className="emlphone_sh">
            <ul>
              <li>
                <div className="call-box">
                  <div className="icon">
                    <img
                      src={phone}
                      alt={phone}
                    />
                  </div>
                  <div className="text">
                    <span>Call Now !</span>{' '}
                    <strong>
                      <a href="tel:+7007187764">+91 7007187764</a>
                    </strong>
                  </div>
                </div>
              </li>

              <li>
                <div className="call-box">
                  <div className="icon">
                    <img
                      src={mailing}
                      alt={mailing}
                    />
                  </div>
                  <div className="text">
                    <span>Email Now</span>{' '}
                    <strong>
                      <a href="mailto:mohit13112004@gmail.com"> mohit13112004@gmail.com</a>
                    </strong>{' '}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* header secion */}
      <section
        className={scroll ? 'navcontainer_AS' : 'navcontainer_BS'}
        id="nav_m_container"
      >
     
        <div id="nav_logo">
          <NavLink
            to={'/collegetemplete'}
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
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                  menuclose();
                }}
                to={'/collegetemplete'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
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
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                  menuclose();
                }}
                to={'/faculties'}
              >
                Faculties
              </NavLink>
            </li>
            <li>
              <NavLink
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
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                  menuclose();
                }}
                to={'/contact'}
              >
                Contact
              </NavLink>
            </li>
            <NavLink
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                menuclose();
              }}
              to={'/notices'}
              id="book_btn"
            >
              <button  className={scroll ? 'bookbtn_AS' : 'bookbtn_BS'}>
                {' '}
                <MdNotificationsActive id="book_icon" />
                Notice
              </button>
            </NavLink>

               {/* contact and mail also socal icons*/}
               <div className="call_box_mob ">
                  <div className="icon_mob">
                    <img
                      src={phone}
                      alt={phone}
                    />
                  </div>
                  <div className="text_mob">
                    <span>Call Now !</span>{' '}
                    <strong>
                      <a href="tel:+7007187764">+91 7007187764</a>
                    </strong>
                  </div>
                </div>

                <div className="call_box_mob ">
                    <div className="icon_mob">
                      <img
                        src={mailing}
                        alt={mailing}
                      />
                    </div>
                    <div className="text_mob">
                      <span>Email Now</span>{' '}
                      <strong>
                        <a href="mailto:mohit13112004@gmail.com"> mohit13112004@gmail.com</a>
                      </strong>{' '}
                    </div>
                  </div>

                  <div className="socallogo_sh__con_mob">
                      <span>
                        <a href="whatsapp:7007197764" target={'_blank'}>
                          <FaWhatsapp id="smallinfo_icon" />
                        </a>
                      </span>
                      <span>
                        <a href="/">
                          <FaFacebookF id="smallinfo_icon" />
                        </a>
                      </span>
                      <span>
                        <a href="/">
                          <RiInstagramFill id="smallinfo_icon" />
                        </a>
                      </span>
                      <span>
                        <a href="/" target={'_blank'}>
                          <FaTwitter id="smallinfo_icon" />
                        </a>
                      </span>
                      <span>
                        <a href="/">
                          <FaYoutube id="smallinfo_icon" />
                        </a>
                      </span>
                 </div>
          </ul>
           {/* logo */}  
           
           
        <div id="nav_logo_mobile">
          <NavLink
            to={'/collegetemplete'}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
              menuclose();
            }}
          >
            <img className="navbar_logo" src={logo} alt="" />
          </NavLink>
        </div>
           
        <CgClose id="removemenu" onClick={menuclose} />
        </div>

        <FiMenu id="addmenu" onClick={menushow} />
      </section>
    </>
  );
};

export default Navbar;

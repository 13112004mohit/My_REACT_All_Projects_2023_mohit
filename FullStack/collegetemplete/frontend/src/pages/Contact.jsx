import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Contact.css";
import { BiMap } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import {
  FaFacebookF,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaBattleNet,
} from "react-icons/fa";
import map from "../assets/map.png";

const About = () => {
  return (
    <>
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
          <div className="contact_img_con">
            <img src={map} alt="" />
          </div>
        <div className="Fcon_contact">
          <h1>We are Connected all time to help you!</h1>
          <p>
            For any inquery contact us.our dedicated suport team is ready to
            answer all your questions
          </p>
          <div className="contact_icons_datas">
            <div className="contact_gettch_Fst_data">
              <p>
                <BiMap className="gettchicon" />
                <b> Address</b> <IoIosArrowForward className="gettarrow" />
                <a target="_blank" rel="noreferrer" href="https://url1.io/s/eRYJP">
                  {" "}
                  VNS. 9/351,Varanasi,U.P 221001
                </a>
              </p>
            </div>
            <div className="contact_gettch_Fst_data">
                <p>
                  <FaPhoneAlt className="gettchicon" />
                  <b> Phone </b>{" "}
                  <IoIosArrowForward
                    style={{ marginLeft: ".8rem" }}
                    className="gettarrow"
                  />
                  <a href="tel:9839136949">7007187764</a>
                </p>
            </div>
            <div className="contact_gettch_Fst_data">
              <p>
                <MdEmail className="gettchicon" />
                <b> Email </b>{" "}
                <IoIosArrowForward
                  style={{ marginLeft: "1.1rem" }}
                  className="gettarrow"
                />{" "}
                <a href="mailto:kartik27oct10@gmail.com ">
                  {" "}
                  socalmedia7007@gmail.com{" "}
                </a>
              </p>
            </div>
            <div className="contact_gettch_Fst_data">
              <p>
                <FaBattleNet className="gettchicon" />
                <b> Socal media Links </b>{" "}
                <IoIosArrowForward
                  style={{ marginLeft: "0rem" }}
                  className="gettarrow"
                />
                <a href="whatsapp:9839136949">
                  <FaWhatsapp id="sociconsize" />
                </a>
                <a href="https://www.facebook.com/TheKashiTour/">
                  <FaFacebookF id="sociconsize" />
                </a>
                <a href="https://www.facebook.com/TheKashiTour/">
                  <RiInstagramFill id="sociconsize" />
                </a>
                <a href="https://www.facebook.com/TheKashiTour/">
                  <FaTwitter id="sociconsize" />
                </a>
                <a href="https://www.facebook.com/TheKashiTour/">
                  <FaYoutube id="sociconsize" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

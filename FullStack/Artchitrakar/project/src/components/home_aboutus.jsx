import React from "react";
import { NavLink } from "react-router-dom";
import "../style/home_aboutus.css";
import "../style/animatedbutton.css";

import img1 from "../assets/19.avif";
import img2 from "../assets/23.avif";
import img3 from "../assets/13.avif";

const About = () => {
  return (
    <>
      <section className="a_h_about_us">
        <div className="grid_two_col">
        <div className="a_h_second_col">
            <div className="about_content_m_con">
              <div className="about_title_ ">
                <h5> About Our ChitrKaars</h5>
                <h2>A Few Words About the ChitrKaars</h2>
              </div>

              <p className="txt_2">
               In that our Chitrakaars are desi – in the year- 2015 This Medical College is
                established by Vaidya Satnarayan Pandey. They have also
                established – Shri Shaktimayi Ayurvedic Pharmecy – 2009, Pt
                Harihar best designing and sketching arts since 2013
              </p>
              <div className="about_content2">
                <ul className="green2">
                  <li>
                    <div className="abcontent">
                      <div className="ano">
                        <span>01</span>
                      </div>
                      <div className="text">
                        <h3>Sketch arts</h3>{" "}
                        <p>
                          Sketch arts is most important point is that they that make it uniquein the city and rural areas. Sansthapak is doing .
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
              <NavLink
                id="a"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                }}
                to={"/about"}
              >
                <span>Read More</span>
                <div class="liquid"></div>
              </NavLink>
            </div>
          </div>
          
          <div className="a_h_first_col">
            {" "}
            <div className="about_a_h_first_col2">
              <div className="about_a_h_first_col2_img">
                <img src={img2} alt="best website" />
              </div>
              <div className="about_a_h_first_col2_img">
                <img src={img3} alt="best website" />
              </div>
            </div>
            <div className="about_a_h_first_col1">
              <img src={img1} alt="best website" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

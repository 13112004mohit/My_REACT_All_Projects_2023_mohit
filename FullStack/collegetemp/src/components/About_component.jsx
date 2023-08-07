import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/about_component.css';
import '../style/animation.css';
import {IoIosArrowForward} from 'react-icons/io'

import img1 from '../assets/11.jpg';
import img2 from '../assets/7.jpg';

const About = () => {
  return (
    <>
      <section className="a_h_about_us">
        <div className="grid_two_col">
              <div className="a_h_first_col">
                 <div className="about_a_h_first_col1">
                    <img src={img1} alt="best website" />
                 </div>
                 <div className="about_a_h_first_col2">
                    <div className="about_a_h_first_col2_content">
                        <h1>25+</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className="about_a_h_first_col2_img">
                        <img src={img2} alt="best website" />
                    </div>
                 </div>
              </div>

              <div className="a_h_second_col">
                <div className="about_content_m_con">
                  <div className="about_title_ ">
                      <h5> About Our University</h5>
                      <h2>A Few Words About the University</h2>
                  </div>
                  <p className="txt_1">
                Our community is being called to reimagine the future. As the
                only university where a renowned design school comes together
                with premier colleges, we are making learning more relevant and
                transformational.
                  </p>
  
                  <p className="txt_2">
                We are proud to offer top ranige in employment services such and
                asser payroll and benefits administrato managemen and asistance
                with global business range ployment employer readings from
                religious texts or literature are also commonly inc compliance.
                  </p>
                  <div className="about_content2">
                        <ul className="green2">
                          <li>
                            <div className="abcontent">
                              <div className="ano">
                                <span>01</span>
                              </div>
                              <div className="text">
                                <h3>Doctoral Degrees</h3>{' '}
                                <p>
                                  consectetur adipiscing elit sed do eiusmod tem
                                  incid idunt.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="abcontent">
                              <div class="ano">
                                <span>02</span>
                              </div>{' '}
                              <div class="text">
                                <h3>Global Students</h3>{' '}
                                <p>
                                  consectetur adipiscing elit sed do eiusmod tem
                                  incid idunt.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                  </div>
                   <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/gallery'}>
                      <button className="animated-button">
                         <span>Read More <IoIosArrowForward id='forward_icon'/></span>
                      </button>
                   </NavLink>
                </div>
              </div>
        </div>
      </section>
    </>
  );
};

export default About;

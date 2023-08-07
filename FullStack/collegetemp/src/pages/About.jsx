import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Aboutpg.css' 
import Twoside_ from '../components/twoside_';

import img1 from '../assets/8.jpg';
import img2 from '../assets/14.jpg';

const About = () => {
  return (
    <>
     <section className="about_m_con">
         <div className="aboutpg_F_con">
               <h1>About us</h1>
               <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/collegetemplete'}>Home </NavLink>Know More About the kashi tour</p>
         </div>
      </section>

      <section className="a_mpg_about_us">
        <div className="a_mpg_grid_two_col">
              <div className="a_mpg_first_col">
                 <div className="_a_mpg_first_col1">
                    <img src={img1} alt="best website" />
                 </div>
                 <div className="_a_mpg_first_col2_">
                    <div className="_a_mpg_first_col2__content">
                        <h1>25+</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className="_a_mpg_first_col2__img">
                        <img src={img2} alt="best website" />
                    </div>
                 </div>
              </div>

              <div className="a_mpg_second_col">
                <div className="about_content_mpg_con">
                  <div className="about_title_mpg ">
                      <h5> About Our University</h5>
                      <h2>A Few Words About the University</h2>
                  </div>
                  <p className="txt_1_mpg">
                Our community is being called to reimagine the future. As the
                only university where a renowned design school comes together
                with premier colleges, we are making learning more relevant and
                transformational.
                  </p>
  
                  <p className="txt_2_mpg">
                We are proud to offer top ranige in employment services such and
                asser payroll and benefits administrato managemen and asistance
                with global business range ployment employer readings from
                religious text_mpgs or literature are also commonly inc compliance.
                  </p>
                  <div className="about_content2_mpg">
                        <ul className="green2_mpg">
                          <li>
                            <div className="abcontent_mpg">
                              <div className="ano">
                                <span>01</span>
                              </div>
                              <div className="text_mpg">
                                <h3>Doctoral Degrees</h3>{' '}
                                <p>
                                  consectetur adipiscing elit sed do eiusmod tem
                                  incid idunt.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="abcontent_mpg">
                              <div class="ano">
                                <span>02</span>
                              </div>{' '}
                              <div class="text_mpg">
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
                  
                </div>
              </div>
        </div>
      </section>

    
      <Twoside_/>

    </>
  )
}

export default About

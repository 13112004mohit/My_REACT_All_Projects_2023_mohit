import React from 'react'
import '../style/twoside.css'
import Facilitys from '../components/Facilitys'

import principle from '../assets/7.jpg';
import vishion from '../assets/13.jpg';
import services from '../assets/10.jpg';

const twoside_ = () => {
  return (
    <>

      <section className="twoside_m_con">
        <div className="twoside_sm_con">
                <div className="twoside_box_con">
                        <div className="twoside_content_box">
                                <h1>Chief Executive's Desk</h1>
                                <p>In the era of knowledge economy and globalization, youth would need to have two important abilities, namely: application of knowledge in every walk of life and, skills to communicate and attitude to cooperate in global work and social environment.</p>
                                <ul>
                                        <li>t, magni iste? Blanditiis! Lorem ipsum dolor sit amet consectetur . Perspiciatis, nihil.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eligendi blanditiis. Ut temporibus ab amet officia placeat, magni iste? Blanditiis!</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eligendi blanditiis. Ut temporibus ab amet officia placeat, magni iste? Blanditiis!</li>
                                </ul>
                        </div>
                        <div className="twoside_img_box">
                                <img src={vishion} alt="" />
                        </div>
                </div>
                <Facilitys/>
                <div className="twoside_box_con">
                        <div className="twoside_img_box">
                                <img src={principle} alt="" />
                        </div>
                        <div className="twoside_content_box">
                                <h1>Vision & Mission Of Our School</h1>
                                <p>To provide a conducive environment for a future-oriented, holistic education, anchored in a rigorous bilingual academic programme, for children of all nationalities. We nurture students to be independent life-long learners imbued with sound moral values who are respectful and responsible</p>
                                <ul>
                                        <li> Development of good and healthy habits.</li>
                                        <li> Inculcating desirable social attitudes, pleasing manners and good etiquettes.</li>
                                        <li> Exposing the child of real life situations and environment by regulator outdoor visits to places of internet.</li>
                                </ul>
                        </div>
                      
                </div>

        </div>
      </section>
    
    </>
  )
}

export default twoside_
import React from 'react'
import '../style/Home_Advanced.css'

import abt_2 from '../assets/abt_2.jpeg'

const Home_Advanced = () => {
  return (
    <>
        <section className="h_adv_m_con">
              <div className="two_col_abt_">
                    <div className="h_S_advt">
                       <p className='pabout'><a href="tel:+"> Pencil Sketch.</a></p>
                       <h1>Our Advance Pencil Sketch Artist.</h1>
                       <p className="hsa_small_">Fifth saying upon divide divide rule for deep their female all hath brind Days and beast greater grass signs abundantly have greater also days years under brought moveth.</p>

                    </div>
                    <div className="h_F_advt">
                         <img src={abt_2} alt="" />
                    </div>
              </div>
        </section>
    </>
  )
}

export default Home_Advanced
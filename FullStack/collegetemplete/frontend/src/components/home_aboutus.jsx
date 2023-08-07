import React from 'react'
import '../style/home_aboutus.css'
import {RiCheckboxMultipleFill} from 'react-icons/ri'
import abt_2 from '../assets/habout.png'

const home_aboutus = () => {
  return (
    <>
        <section className="h_about_m_con">
              <div className="two_col_abt_">
                    <div className="h_F_abt">
                         <img src={abt_2} alt="" />
                    </div>
                    <div className="h_S_abt">
                       <p className='pabout'><a href="tel:+">ABOUT US</a></p>
                       <h1>Learning with Love and Laughter</h1>
                       <p className="hsa_small_">Fifth saying upon divide divide rule for deep their female all hath brind Days and beast greater grass signs abundantly have greater also days years under brought moveth.</p>

                       <div className="hcon_btn_abt_">
                         <div className="abt_sht_boxs">
                           <div className="icon_check"> <RiCheckboxMultipleFill id='forward_icon_abt'/></div>
                           <div className="abt_sht_datas_">
                             <p>Him lights given i heaven second yielding seas gathered wear</p>
                           </div>
                         </div>
                         <div className="abt_sht_boxs">
                           <div className="icon_check"> <RiCheckboxMultipleFill id='forward_icon_abt'/></div>
                           <div className="abt_sht_datas_">
                             <p>Fly female them whales fly them day deep given night.</p>
                           </div>
                         </div>
                       </div>
                    </div>
              </div>
        </section>
    </>
  )
}

export default home_aboutus
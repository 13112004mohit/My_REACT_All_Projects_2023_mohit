import React from 'react'
import '../style/Home_Advanced.css'
import {RiBookReadFill,RiTeamFill} from 'react-icons/ri'
import abt_2 from '../assets/hadv.png'

const Home_Advanced = () => {
  return (
    <>
        <section className="h_adv_m_con">
              <div className="two_col_abt_">
                    <div className="h_S_advt">
                       <p className='pabout'><a href="tel:+">ADVANCE FEATURE</a></p>
                       <h1>Our Advance Educator Learning System</h1>
                       <p className="hsa_small_">Fifth saying upon divide divide rule for deep their female all hath brind Days and beast greater grass signs abundantly have greater also days years under brought moveth.</p>

                       <div className="hcon_btn_avt_">
                         <div className="adv_sht_boxs">
                           <div className="icon_check_adv"> <RiBookReadFill id='forward_icon_advt'/></div>
                           <div className="abt_sht_datas_">
                             <h1>Learn Anywhere</h1>
                             <p>Him lights given i heaven second yielding seas gathered wear</p>
                           </div>
                         </div>
                         <div className="adv_sht_boxs">
                           <div className="icon_check_adv"> <RiTeamFill id='forward_icon_advt'/></div>
                           <div className="abt_sht_datas_">
                             <h1>Expert Teacher</h1>
                             <p>Fly female them whales fly them day deep given night.</p>
                           </div>
                         </div>
                       </div>
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
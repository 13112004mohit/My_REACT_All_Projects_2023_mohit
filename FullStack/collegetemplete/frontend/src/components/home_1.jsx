import React from 'react'
import {RiLightbulbFlashFill} from 'react-icons/ri'
import {FaPeopleCarry} from 'react-icons/fa'
import '../style/home_1.css'
import '../style/animatedbutton.css'
import {GiStairsGoal} from 'react-icons/gi'

import services_ from '../assets/services_.png';

const home_1 = () => {
  return (
    <> 
      <section className="home_1_main_con">
      
      {/* first container */}
        <div className="home_1_F_con_three">
               <div className="home_1_F_con_ colorcng">
                        <div className="home_1_two_col_con " id='home_1_big'>
                            <h1 className='home_1_h1 ' id='bigh1'>Awesome Feature</h1>
                            <p className="home_1_p" id='bigp'>Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
                            <a href="#" id='a'>
                              <span>Read more</span>
                              <div class="liquid"></div>
                            </a>
                        </div>
                </div>
                <div className="home_1_F_con_ ">
                        <div className="home_1_icon_con">
                                <GiStairsGoal id='home_1_icon'/>
                        </div>
                        <div className="home_1_two_col_con">
                                <h1 className='home_1_h1'>Better Future</h1>
                                <p className="home_1_p">Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
                        </div>
                </div>
                <div className="home_1_F_con_ ">
                        <div className="home_1_icon_con">
                                <FaPeopleCarry id='home_1_icon'/>
                        </div>
                        <div className="home_1_two_col_con">
                                <h1 className='home_1_h1'>Qualified Trainers</h1>
                                <p className="home_1_p">Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
                        </div>
                </div>
                <div className="home_1_F_con_">
                        <div className="home_1_icon_con">
                                <RiLightbulbFlashFill id='home_1_icon'/>
                        </div>
                        <div className="home_1_two_col_con">
                        <h1 className='home_1_h1'>Job Oppurtunity</h1>
                                <p className="home_1_p">Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
                        </div>
                </div>
        </div>

      </section>
    
    </>
  )
}

export default home_1
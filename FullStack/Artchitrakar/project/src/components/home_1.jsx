import React from 'react'
import {FaPhoenixFramework} from 'react-icons/fa'
import '../style/home_1.css'
import '../style/animatedbutton.css'
import {GiStarfighter,GiMoebiusStar} from 'react-icons/gi'


const home_1 = () => {
  return (
    <> 
      <section className="home_1_main_con">
      
      {/* first container */}
        <div className="home_1_F_con_three">
            
                <div className="home_1_F_con_ ">
                        <div className="home_1_icon_con">
                                <GiStarfighter id='home_1_icon'/>
                        </div>
                        <div className="home_1_two_col_con">
                                <h1 className='home_1_h1'>Better Designs</h1>
                                <p className="home_1_p">Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
                        </div>
                </div>
                <div className="home_1_F_con_ ">
                        <div className="home_1_icon_con">
                                <FaPhoenixFramework id='home_1_icon'/>
                        </div>
                        <div className="home_1_two_col_con">
                                <h1 className='home_1_h1'>Qualified Artists</h1>
                                <p className="home_1_p">Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
                        </div>
                </div>
                <div className="home_1_F_con_">
                        <div className="home_1_icon_con">
                                <GiMoebiusStar id='home_1_icon'/>
                        </div>
                        <div className="home_1_two_col_con">
                        <h1 className='home_1_h1'>Good Quality work</h1>
                                <p className="home_1_p">Set have great you male grasses yielding yielding first their to called deep abundantly Set have great you male</p>
                        </div>
                </div>
        </div>

      </section>
    
    </>
  )
}

export default home_1
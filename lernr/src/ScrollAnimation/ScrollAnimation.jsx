import React from 'react'
import './ScrollAnimation.css'

const ScrollAnimation = () => {
  return (
    <>  

    <div className='centerall'>
         <h1 className='warning'>please ZooM your Brower for check effects because this is work only scroll so zoom and scroll page</h1>
        
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        //   data-aos-mirror="true"
        //   data-aos-once="false"
          data-aos-anchor-placement="center-center"
        > Total data-aos-(useses)</h1>

        <h1 data-aos-duration='1000' data-aos="fade" >fade </h1>
        <h1 data-aos-duration='1000' data-aos="fade-up" >fade-up 🔝 </h1>
        <h1 data-aos-duration='1000' data-aos="fade-down" >fade-down ⬇</h1>
        <h1 data-aos-duration='1000' data-aos="fade-left" >fade-left ⬅</h1>
        <h1 data-aos-duration='1000' data-aos="fade-right" >fade-Right ➡</h1>
        <hr /><br /><br />
        <h1 data-aos-duration='1000' data-aos='fade-up-right' >fade-up-right 🔝➡</h1>
        <h1 data-aos-duration='1000' data-aos='fade-up-left' >fade-up-left 🔝⬅</h1>
        <h1 data-aos-duration='1000' data-aos='fade-down-right' >fade-down-right ⬇➡</h1>
        <h1 data-aos-duration='1000' data-aos='fade-down-left' >fade-down-left ⬇⬅</h1>
        <hr /><br /><br />
        <h1 data-aos-duration='1000' data-aos='zoom-in'>zoom-in</h1>
        <h1 data-aos-duration='1000' data-aos='zoom-in-up'>zoom-in-up</h1>
        <h1 data-aos-duration='1000' data-aos='zoom-out'>zoom-out</h1>
        <hr /><br /><br />
        <h1 data-aos-duration='1000' data-aos='slide-up'>slide-up</h1>
        <h1 data-aos-duration='1000' data-aos='slide-down'>slide-down</h1>
        <h1 data-aos-duration='1000' data-aos='slide-left'>slide-left</h1>
        <h1 data-aos-duration='3000' data-aos='slide-right'>slide-right</h1>
        <hr /><br /><br />
        <h1 data-aos-duration='3000' data-aos='flip-up'>flip-up</h1>
        <h1 data-aos-duration='3000' data-aos='flip-down'>flip-down</h1>
        <h1 data-aos-duration='3000' data-aos='flip-left'>flip-left</h1>
        <h1 data-aos-duration='3000' data-aos='flip-right'>flip-right</h1>

</div>
    </>
  )
}

export default ScrollAnimation;
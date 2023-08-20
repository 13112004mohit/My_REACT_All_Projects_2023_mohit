import React from 'react'
import '../style/twoside.css'

const principle   ='https://plus.unsplash.com/premium_photo-1682689551573-da441d5bc0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJhd2luZyUyMHZpc2lvbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'

const twoside_ = () => {
  return (
    <>

      <section className="twoside_m_con">
                <div className="twoside_box_con">
                        <div className="twoside_img_box">
                                <img src={principle} alt="" />
                        </div>
                        <div className="twoside_content_box">
                                <h1>Our Vision and Mission</h1>
                                <p>At our Art Gallery, our vision is to create an inspiring and inclusive space where art becomes a catalyst for personal growth and cultural appreciation. </p>
                                <ul>
                                  <li> EXPLORE, ENGAGE, EVOLVE Our mission is to provide a dynamic environment that encourages exploration, </li>
                                  <li> EDUCATING AND INSPIRING FUTURE GENERATIONS We are dedicated to nurturing a love for art in the hearts and minds</li>
                                  <li>JOIN OUR ARTISTIC COMMUNITYWe invite you to become a part of our vibrant artistic community</li>
                                </ul>
                        </div>

        </div>
      </section>
    
    </>
  )
}

export default twoside_
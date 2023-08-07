import React from 'react'
import '../style/tvideo.css'


import gest1 from '../assets/19.png';

const TVideo = () => {
  return (
    <>
        <section className="video_grid_two">
          
            <div className="video_content">
                 <div className="col_video">
                     <div className="sectiontitle_video" >
                         <h1>Our Best Features</h1>                
                           <p> Special wedding garments are often worn, and the ceremony is sometimes followed by a wedding reception. Music, poetry.</p>
                     </div>
                     <ul className="pr_video">
                        <li>
                             <div className="stepbox_video">
                                 <div className="dnumber">
                                     <div className="datebox_video_"><img  src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon01.png" alt="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon01.png" /></div>
                                 </div>
                                 <div className="text_video">
                                     <h3>Skilled Teachers</h3>
                                     <p>Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings from.</p>
                                 </div>
                             </div>
                         </li>
                        <li>
                             <div className="stepbox_video">
                                 <div className="dnumber">
                                     <div className="datebox_video_"><img  src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon02.png" alt="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon02.png" /></div>
                                 </div>
                                 <div className="text_video">
                                     <h3>Affordable Courses</h3>
                                     <p>Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings from.</p>
                                 </div>
                             </div>
                         </li>
                        <li>
                             <div className="stepbox_video">
                                 <div className="dnumber">
                                     <div className="datebox_video_"><img  src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon03.png" alt="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon03.png" /></div>
                                 </div>
                                 <div className="text_video">
                                     <h3>Efficient &amp; Flexible</h3>
                                     <p>Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings from.</p>
                                 </div>
                             </div>
                         </li>
                        
                    </ul>
                 </div>
            </div>
            <div className="video_">
                  <img src={gest1} alt="best website" />
            </div> 
        </section>
    </>
  )
}

export default TVideo
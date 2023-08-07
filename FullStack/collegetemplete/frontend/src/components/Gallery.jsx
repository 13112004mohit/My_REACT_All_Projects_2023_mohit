import React, { useState } from 'react'
import '../style/ImageModal.css';
import '../style/gallery_component.css';
import '../style/animatedbutton.css'
import { NavLink } from 'react-router-dom';
import DataV from '../components/ImgDataComponent'
import {FcNext,FcPrevious} from 'react-icons/fc'
import {GrClose} from 'react-icons/gr'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const Gallery_component = () => {

  const [data, setData] = useState({img:'',i:0});
  const openModal = (img,i)=>{
    setData({img,i})
  }

  const imgAction =(action)=>{
    let i= data.i;
    if(action === 'next-img'){
      setData({img:DataV[i + 1].image , i:i+1})
    }
    if(action === 'previous-img'){
      setData({img:DataV[i - 1].image , i:i-1})
    }
    if(!action){
      setData({img:'',i:0})
    }
  } 

  return (
    <>
     {
      data.img && 
      <div className="modal-overlay" >
      <div className="modal">
        <img id='zoomout' src={data.img} onClick={()=>imgAction()} alt="modal_image" />
        <button className="modal-close" onClick={()=>imgAction()}><GrClose/></button>
        <button className="modal-prev" onClick={()=>imgAction('previous-img')}><FcPrevious/></button>
        <button className="modal-next" onClick={()=>imgAction('next-img')}><FcNext/></button>
      </div>
    </div>
     }

        <div className="gallery_component_m_con">
           <div className="galler7_component_F_con">
             <div className="_under_gallery_component_F_con">
               <h1 id='gallery_compo_h1'>our Gallery</h1>
               <p  id='gallery_compo_p' >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
doloremque laudantium totam rem </p>
             </div>

            
           </div> 
         
             <div id='gallery_m_con'>
               <ResponsiveMasonry   columnsCountBreakPoints={{330:2,554: 2, 640:3, 750: 4, 900:5, 1700:5}} >
                            <Masonry >
                  {DataV.map((data, i) => (
                     <img data-aos-duration='1000' data-aos='zoom-in' id='zoomin'  onClick={() => openModal(data.image,i)}  src={data.image}  alt="img_" />
                  ))}
               
                 </Masonry>
                 </ResponsiveMasonry>

             </div> 

 {/* button */} 
 <div class="container gallery">
          <NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/gallery'} className="btn">
            <svg id='svg'>
              <defs>
                  <linearGradient id="grad1">
                      <stop offset="0%" stop-color="#FF8282"/>
                      <stop offset="100%" stop-color="#E178ED" />
                  </linearGradient>
              </defs>
               <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" id='rect'></rect>
            </svg>
              <span>View All Images</span>
          </NavLink>
        </div>
    </div>     
    
    </>
  )
}

export default Gallery_component


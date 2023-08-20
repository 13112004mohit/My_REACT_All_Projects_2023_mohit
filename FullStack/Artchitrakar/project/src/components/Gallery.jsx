import React, { useState } from 'react'
import '../style/ImageModal.css';
import '../style/gallery_component.css';
import '../style/animatedbutton.css'
import { NavLink } from 'react-router-dom';
import {FcNext,FcPrevious} from 'react-icons/fc'
import {GrClose} from 'react-icons/gr'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useSelector } from 'react-redux';
import { serverimg } from '../server';


const Gallery_component = () => {
  const {images} = useSelector(
    (state) => state.admin
  );
  const [data, setData] = useState({image:'',i:0});
  const openModal = (image,i)=>{
    setData({image,i})
  }

  const imgAction =(action)=>{
    let i= data.i;
    if(action === 'next-img'){
      setData({image:images.images[i + 1].image , i:i+1})
    }
    if(action === 'previous-img'){
      setData({image:images.images[i - 1].image , i:i-1})
    }
    if(!action){
      setData({image:'',i:0})
    }
  } 

  return (
    <>
     {
      data.image && 
      <div className="modal-overlay" >
      <div className="modal">
        <img id='zoomout'  src={`${serverimg}/${data.image}`}  onClick={()=>imgAction()} alt="modal_image" />
        <button className="modal-close" onClick={()=>imgAction()}><GrClose/></button>
        <button className="modal-prev" onClick={()=>imgAction('previous-img')}><FcPrevious/></button>
        <button className="modal-next" onClick={()=>imgAction('next-img')}><FcNext/></button>
      </div>
    </div>
     }

        <div className="gallery_component_m_con">
           <div className="galler7_component_F_con">
             <div className="_under_gallery_component_F_con">
               <h1 id='gallery_compo_h1'>Gallery</h1>
               <p  id='gallery_compo_p' >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
doloremque laudantium totam rem </p>
             </div>

            
           </div> 
         
             <div id='gallery_m_con'>
               <ResponsiveMasonry   columnsCountBreakPoints={{330:2,554: 2, 640:3, 750: 4, 900:4, 1700:4}} >
                            <Masonry gutter='10px'>
                  {images && images.images.slice(0,8).map((data, i) => (
                     <img data-aos-duration='1000' data-aos='zoom-in' id='zoomin'  onClick={() => openModal(data.image,i)}   src={`${serverimg}/${data.image}`}   alt="img_" />
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
              <span>View all Images</span>
          </NavLink>
        </div>
    </div>     
    
    </>
  )
}

export default Gallery_component


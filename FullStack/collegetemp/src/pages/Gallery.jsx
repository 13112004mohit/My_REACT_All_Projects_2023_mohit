import React, { useState } from 'react'
import '../style/ImageModal.css';
import '../style/galleryPG.css';
import DataV from '../components/ImgData'
import {FcNext,FcPrevious} from 'react-icons/fc'
import {GrClose} from 'react-icons/gr'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { NavLink } from 'react-router-dom';


const Gallery = () => {

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
 <div className="gallerypg_bgccon">
    <div className="gallerypg_F_con">
             <h1>Gallery</h1>
             <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/collegetemplete'}>Home </NavLink>Qeducato gallery</p>
    </div>
 </div>
<section className="gallerypg_m_con">
    
     <div id='gallerypg_m_'>
      <ResponsiveMasonry  columnsCountBreakPoints={{554: 2, 750: 2, 900: 3}} >
                   <Masonry gutter='15px'>
         {DataV.map((data, i) => (
            <img id='gallerypg'  onClick={() => openModal(data.image,i)}  src={data.image}  alt="img_" />
         ))}
      
        </Masonry>
        </ResponsiveMasonry>

    </div> 
</section>

    </>
  )
}


export default Gallery
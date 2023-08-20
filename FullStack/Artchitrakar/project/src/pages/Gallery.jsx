import React, { useState } from 'react'
import '../style/ImageModal.css';
import '../style/galleryPG.css';
import {FcNext,FcPrevious} from 'react-icons/fc'
import {GrClose} from 'react-icons/gr'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { NavLink } from 'react-router-dom';
import MetaData from '../components/layout/MetaData';
import { useSelector } from 'react-redux';
import { serverimg } from '../server';


const Gallery = () => {
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
      <MetaData title="Chitrakar-Gallery" />
     {
      data.image && 
      <div className="modal-overlay" >
        <div className="modal">
          <img id='zoomout' src={`${serverimg}/${data.image}`} onClick={()=>imgAction()} alt="modal_image" />
          <button className="modal-close" onClick={()=>imgAction()}><GrClose/></button>
          <button className="modal-prev" onClick={()=>imgAction('previous-img')}><FcPrevious/></button>
          <button className="modal-next" onClick={()=>imgAction('next-img')}><FcNext/></button>
        </div>
      </div>
     }
 <div className="gallerypg_bgccon">
    <div className="gallerypg_F_con">
       <h1>Gallery</h1>
       <p><NavLink onClick={()=>{ window.scrollTo({top:0 ,left:0 ,behavior:'auto'})}} to={'/'}>Home </NavLink>Fixlogy Gallery</p>
    </div>
 </div>
<section className="gallerypg_m_con">
    
     <div id='gallerypg_m_'>
      <ResponsiveMasonry  columnsCountBreakPoints={{330:2,554: 2, 640:3, 750: 4, 900:5, 1700:5}} >
                   <Masonry  gutter='15px'>
         {images && images.images.map((data, i) => (
            <img id='gallerypg'  onClick={() => openModal(data.image,i)}    src={`${serverimg}/${data.image}`} alt="img_" />
         ))}
      
        </Masonry>
        </ResponsiveMasonry>

    </div> 
</section>

    </>
  )
}


export default Gallery
import React, { useState } from 'react'
import '../style/singleProduct.css'

const MySingleProductImage = ({imgs = [{url:""}]}) => {

   const [mainImage,setMainImage] = useState(imgs[0])

  return (
    <>
         <div className="grid_four_column">
            {
              imgs.map((curElem,i)=>{
                 return(
                  <figure>
                    <img 
                      src={curElem.url} 
                      alt={curElem.filename} 
                      className="box_image_style" 
                      key={i} 
                      onClick={()=>setMainImage(curElem)}
                      />
                  </figure>
                 )
              })
            }
          </div>   
            {/*Second Coolumn  */}
          <div className="main_screen">
            <img className='main_screen_image' src={mainImage.url} alt={imgs[0].filename} />
          </div>  

    </>
  )
}

export default MySingleProductImage
import React from 'react'
import './Gotop.css'



const GoTop = () => {

    const gotoBtn =() =>{
        window.scrollTo({top:0 ,left:0 ,behavior:'smooth'})
    }

  return (
    <>
        <div className='top_btn' onClick={gotoBtn}><img className='top_img' src="https://cdn-icons-png.flaticon.com/128/3272/3272638.png" alt="" /></div>
    </>
  )
}

export default GoTop
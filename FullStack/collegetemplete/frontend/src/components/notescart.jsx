import React from 'react'
import '../style/notescart.css'

const notescart = (props) => {
  return (
    <>
    <div class="card_m_con_n">
      
      <div class="card card-1">
        <h3>{props.title}</h3>
        <p>{props.notice}</p>
        <div className="date_n">
           <h1><b>{props.month}</b> {props.date}</h1>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default notescart
import React from 'react';
import "./Cards.css";


export default function Cards(props) {
  return (
    <>

      <div className='cardbody'>
          <div className='imgbox'>
            <img  src={props.img} alt="NETflex Prime videos" />
          </div>
          <h3 className='netCom'>{props.netflex}</h3>
          <h2 className='netMN'> {props.title} </h2>
          <p className='rating'>{props.rating}</p>
          <a href={props.link} target="_blank" rel="noreferrer">
            <button className='btn'>WATCH NOW</button>
          </a>
      </div>


    </>
  );
}
 


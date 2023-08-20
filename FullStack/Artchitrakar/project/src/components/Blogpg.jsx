import React, { useEffect, useState } from "react";
import "../style/Blogpg.css";
import { FaWhatsapp} from 'react-icons/fa';
import { GiPriceTag} from 'react-icons/gi';
import { serverimg } from "../server";
import DOMPurify from "dompurify";

const Blogpg = (props) => {
  const sanitizedHTML = DOMPurify.sanitize(props.notes);


  const istDate = new Date(props.date);

   const utcDate = new Date(istDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const Year = utcDate.getFullYear();
  let Month = utcDate.getMonth() + 1;
  const Day = utcDate.getDate();
  let Hours = utcDate.getHours();
  const Minutes = utcDate.getMinutes();
  const Seconds = utcDate.getSeconds();
const amOrPm = Hours >= 12 ? "PM" : "AM";
      Hours = Hours % 12 || 12; 
let MonthNames = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "June", "July",
  "Aug", "Sept", "Oct",
  "Nov", "Dec"
];
 const monthName = MonthNames[Month-1];

const [isValidAvatar, setIsValidAvatar] = useState(true);
useEffect(() => {
  if (props.authorimg) {
    const img = new Image();
    img.src = `${props.authorimg}`;
    img.onerror = () => {
      setIsValidAvatar(false);
    };
  }
},[])

  return (
    <>
      <div class="card_pg">
        <div class="thumbnail">
          <img
            class="left"
            src={`${serverimg}/${props.image}`}
            alt="imag"
          />
        </div>
        <div class="right">
          <h1>{props.heading.slice(0,42)}...</h1>
          <div class="author">
            <img src={
               isValidAvatar && props.authorimg 
               ? props.authorimg
               : 'https://rb.gy/in89r'
                 } 
                  alt="img"
                 />
            <h2>{props.author.slice(0,10)}</h2>
          </div>
          <div class="separator"></div>
          {/* <p>{props.notes.slice(0,757)}...</p> */}
          {/* <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.notes).slice(0,757) }}></p> */}
          <p dangerouslySetInnerHTML={{ __html:sanitizedHTML }}></p>
        </div>
        <h5>{Year}</h5>
        <h6>{Day}/{monthName} <small style={{fontSize:'16px',color:'#373636',fontFamily:'roboto'}}>{Hours}:{Minutes} {amOrPm}</small></h6>
        <div className="blogcategorys">
                        <GiPriceTag id="categoryicons"/>
                        <p>{props.category}</p>
                </div>
        <div class="fab">
         <a target="_blank" rel="noreferrer" href={`https://wa.me/${props.mobileNum}`}><FaWhatsapp class="blogicon" /> </a> 
        </div>
      </div> 
    </>
  );
};

export default Blogpg;

import React from "react";
import "../style/blog_cart.css";
import DOMPurify from "dompurify";
import { htmlToText } from "html-to-text";
import { serverimg } from "../server";

const blog_cart = (props) => {
    const convertHtmlToText = (html) => {
      return htmlToText(html, {
        wordwrap: 130,
      });
    };
   const descr = convertHtmlToText(props.notes)

  const createdAtDate = new Date(props.date);
  const Year = createdAtDate.getFullYear(); // Adding 1 because getMonth() returns 0-indexed month (January is 0)
  
  const date = new Date(props.date);
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  const monthName = monthNames[date.getMonth()];
  
  const createdDate = new Date(props.date);
  const day = createdDate.getUTCDate();
  return (
    <>     
      <div
        style={{
              background: `url(${serverimg}/${props.image})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
        className="blog-card spring-fever"
      >
        <div class="title-content">
          <h3>{props.heading.slice(0,20)}</h3>
          <hr />
          <div class="intro">   
          {descr.slice(0,45)}
          </div>
        </div>
        <div class="card-info">
           {descr.slice(0,190)}...
        </div>
        <div class="utility-info">
          <ul class="utility-list">
            <li class="comments">{props.category.slice(0,15)}</li>
            <li class="date">{day} /{monthName}/{Year}</li>
          </ul>
        </div>

        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
      </div>
    </>
  );
};

export default blog_cart;

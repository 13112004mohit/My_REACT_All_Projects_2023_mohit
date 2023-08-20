import React from "react";
import "../style/latestCart.css";
import { serverimg } from "../server";

const notescart = (props) => {
  return (
    <>
      <div className="carsole2_images_con image-box2">
        <img className="carsole2_imgs"  src={`${serverimg}/${props.image}`} alt="our_members" />
        <div class="overlay2 ">
          <p>{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default notescart;

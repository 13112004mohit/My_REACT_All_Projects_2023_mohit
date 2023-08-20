import React from "react";
import "../style/ourteamcart.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF,FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { serverimg } from "../server";

const teamCart = (props) => {
  return (
    <>
         <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid"
                src={`${serverimg}/${props.image}`}
                alt="img"
              />
            </div>
            <div className="team-content">
              <h3 className="name">{props.name}</h3>
              <h4 className="title">{props.work}</h4>
              <h4 className="degree">{props.degree}</h4>
            </div>
            <ul className="social">
              <li>
                <a href={`https://wa.me/${props.Whatsapp}`}>
                  {" "}
                  <FaWhatsapp className="fab_icon" />
                </a>
              </li>
              <li>
                <a href={props.facebook}>
                  {" "}
                  <FaFacebookF className="fab_icon" />
                </a>
              </li>
              <li>
                <a href={props.instagram}>
                  {" "}
                  <RiInstagramFill className="fab_icon" />
                </a>
              </li>
              <li>
                <a href={props.twitter}>
                  {" "}
                  <FaTwitter className="fab_icon" />
                </a>
              </li>
              <li>
                <a href={props.youtube}>
                  {" "}
                  <FaYoutube className="fab_icon" />
                </a>
              </li>
            </ul>
          </div>
    </>
  );
};

export default teamCart;

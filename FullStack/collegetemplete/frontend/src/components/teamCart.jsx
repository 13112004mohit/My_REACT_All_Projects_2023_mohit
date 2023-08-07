import React from "react";
import "../style/ourteamcart.css";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF,FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const teamCart = (props) => {
  return (
    <>
         <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid"
                src={props.image}
              />
            </div>
            <div className="team-content">
              <h3 className="name">{props.name}</h3>
              <h4 className="title">{props.work}</h4>
              <h4 className="degree">{props.degree}</h4>
            </div>
            <ul className="social">
              <li>
                <a href="https://codepen.io/collection/XdWJOQ/">
                  {" "}
                  <FaWhatsapp className="fab" />
                </a>
              </li>
              <li>
                <a href="https://codepen.io/collection/XdWJOQ/">
                  {" "}
                  <FaFacebookF className="fab" />
                </a>
              </li>
              <li>
                <a href="https://codepen.io/collection/XdWJOQ/">
                  {" "}
                  <RiInstagramFill className="fab" />
                </a>
              </li>
              <li>
                <a href="https://codepen.io/collection/XdWJOQ/">
                  {" "}
                  <FaTwitter className="fab" />
                </a>
              </li>
              <li>
                <a href="https://codepen.io/collection/XdWJOQ/">
                  {" "}
                  <FaYoutube className="fab" />
                </a>
              </li>
            </ul>
          </div>
    </>
  );
};

export default teamCart;

// DropdownMenu.js

import React, { useState, useEffect, useRef } from "react";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "./sid.css";
import { useDispatch, useSelector } from "react-redux";
import {  clearMessages,  logoutUser } from "../../redux/actions/user";
import { toast } from "react-toastify";
import { serverimg } from "../../server";

const DropdownMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isAuthenticated, message } = useSelector(
    (state) => state.user
  );
  

  const LogOutHandler= (e)=>{
    e.preventDefault();
    dispatch(logoutUser(() => {
      navigate('/')
    }));
  }

  useEffect(() => {

    if (!isAuthenticated) {
      toast.success(message);
      dispatch(clearMessages())
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={handleDropdownToggle}>
        {isAuthenticated ? (
          <img id="profile-img" src={
              user.avatar=== 'nimg' 
                   ?'https://rb.gy/in89r'
                   :  `${serverimg}/${user.avatar}`
              } alt="" />
        ) : (
          <CgProfile id="profile-icon"  />
        )}
      </button>
      {isOpen && isAuthenticated && (
        <ul className="dropdown-menu">
          <li onClick={handleDropdownToggle}>
            <CgProfile id="dr-icons" />
            <Link to={"/profile"}>Profile</Link>
          </li>
        { user && user.role === 'admin' ?
        (
          <li onClick={handleDropdownToggle}>
            <MdOutlineDashboardCustomize id="dr-icons" />
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        ) : (
          <li onClick={handleDropdownToggle}>
            <FaUserEdit id="dr-icons" />
            <Link to={"/updateprofile"}>Edit Profile</Link>
          </li>
        ) 
          }
          <li onClick={handleDropdownToggle} >
            <AiOutlineSetting id="dr-icons" />
            <Link to={"/passwordupdate"}>Setting</Link>
          </li>
          <hr className="loghr" />
          <li onClick={LogOutHandler}>
            <AiOutlineLogout id="dr-icons" />
            Logout
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;

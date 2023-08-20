import React, {  useEffect } from "react";
import Dashboard from "../components/layout/AdminDashboard/Dashboard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const {user} = useSelector(
    (state) => state.user
  );
 
  useEffect(()=>{
    if(user && user.role !== 'admin'){
    navigate('/')
   }
   },[user,navigate])
  return (
   <>
     <Dashboard/>
   </>
  );
};

export default Profile;

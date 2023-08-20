import React, { useEffect, Fragment } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/actions/user";
axios.defaults.withCredentials = true;

const ActivationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();
  const [error, setError] = useState(false);
  const config = { headers: { "Content-Type": "multipart/form-data" } };

  const sendRequest = async () => {
    await axios
      .post(
        `${server}/activation/${token}`,
        token,
        { withCredentials: true },
        config
      )
      .then((res) => {
        dispatch(loadUser())
        toast.success("Activated Your Account ");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setError(true);
      });
  };

  const onHandle = () => {
    if (token) {
      sendRequest();
    }
  };

  const headingtcn={
    fontFamily: 'Roboto',
    marginBottom: '1rem',
    color: 'red',
  }

  const generatecss = {
    width: "15rem",
    height: "2rem",
    borderRadius: "0.5rem",
    border: "2px solid #8bbcff",
    background: "#92d1ff",
    fontFamily: "Roboto",
    fontSize: "1rem",
    boxShadow: "0 0 17px 2px #c3c3ff",
    cursor:'pointer',
  };
  return (
    <div
      style={{
        background: "#ffffff",
        cursor:'pointer',
        width: " 100vw",
        height: "100vh",
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgrounColor: " rgb(231, 231, 231)",
        position: "fixed",
        top: "0%",
        left: "0",
        zIndex: "9999",
        display:'flex',
        flexDirection:'column',
      }}
    >
      {error ? (
        <Fragment>
          <h1 style={headingtcn}>
            Your Token is expired!
          </h1>
         
          <button
            onClick={() => navigate("/loginsignup")} style={generatecss} >
            Create new Account
          </button>
        </Fragment>
      ) : (
        <button onClick={() => onHandle()} style={generatecss}>
          Generate Your New Account
        </button>
      )}
    </div>
  );
};

export default ActivationPage;

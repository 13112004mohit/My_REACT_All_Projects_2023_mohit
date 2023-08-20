import React, { Fragment, useState, useEffect } from "react";
import "./ForgotPassword.css";
import Loader from "../layout/Loader/Loader";
import { AiFillMail, AiFillLock, AiFillUnlock } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import { server } from "../../server";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  // const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();
    try {
      toast.promise(
        new Promise((resolve, reject) => {
          axios
            .post(
              `${server}/password/forgot`,
              { email },
              { withCredentials: true }
            )
            .then((res) => resolve(res.data))
            .catch((error) =>
              reject(error.response ? error.response.data : error)
            );
        }),
        {
          pending: {
            render: () => "Sending password reset email...",
          },
          success: {
            render: ({ data }) => data.message,
          },
          error: {
            render: ({ data }) => data.message,
          },
        }
      );
    } catch (error) {
      toast.error(
        error.response
          ? error.response.data.message
          : "Failed to send password reset email."
      );
    }
  };

  return (
    <Fragment>
      <MetaData title="Forgot Password" />
      <div className="forgotPasswordContainer">
        <div className="forgotPasswordBox">
          <h2 className="forgotPasswordHeading">Forgot Password</h2>

          <form className="forgotPasswordForm" onSubmit={forgotPasswordSubmit}>
            <div className="forgotPasswordEmail">
              <AiFillMail />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Link
              style={{
                fontSize: ".88rem",
                fontFamily: "math",
                position: "relative",
                float: "right",
                left: "30%",
                textDecoration: "none",
                color: "#4f4f4f",
                cursor: "pointer",
              }}
              to="/loginsignup"
            >
              Login/Signup?
            </Link>
            <input type="submit" value="Submit" className="forgotPasswordBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;

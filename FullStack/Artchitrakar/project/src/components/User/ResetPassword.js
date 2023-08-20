import React, { Fragment, useState, useEffect } from "react";
import "./ResetPassword.css";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import {  AiFillLock, AiFillUnlock } from "react-icons/ai";
import { clearErrors } from "../../redux/actions/user";
import { toast } from "react-toastify";
import axios from "axios";
import { server } from "../../server";

const ResetPassword = ({ history, match }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {token} = useParams()

  const { error, success, loading } = useSelector(
    (state) => state.user
  );
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = async(e) => {
    e.preventDefault();
     let myForm = {
      password:password,
      cpassword:confirmPassword
     }

     await axios
     .post(
       `${server}/password/reset/${token}`,
       myForm,
       { withCredentials: true },
       config
     )
     .then((res) => {
       toast.success("Password reset sucessfully!");
       navigate("/loginsignup");
     })
     .catch((err) => {
       toast.error(err.response.data.message);
     });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

  }, [error,dispatch,clearErrors,toast]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Change Password" />
          <div className="resetPasswordContainer">
            <div className="resetPasswordBox">
              <h2 className="resetPasswordHeading">Reset Password</h2>

              <form
                className="resetPasswordForm"
                onSubmit={resetPasswordSubmit}
              >
                <div>
                  <AiFillLock />
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <AiFillUnlock />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Update"
                  className="resetPasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
     </Fragment>
  );
};

export default ResetPassword;

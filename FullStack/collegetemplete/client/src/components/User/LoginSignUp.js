import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import MetaData from "../layout/MetaData";
import { Link ,useNavigate} from "react-router-dom";
import { AiFillMail, AiFillLock, AiFillUnlock } from "react-icons/ai";
import { CgProfile} from "react-icons/cg";
import {loadUser,loginUser,clearErrors} from '../../redux/actions/user'
import {useDispatch,useSelector} from 'react-redux'
import { server } from "../../server";
import axios from 'axios'
import {toast} from 'react-toastify'

const LoginSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user, isLoading, error } = useSelector(
    (state) => state.user
  );

  

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [userEmail, setLoginEmail] = useState("");
  const [userPassword, setLoginPassword] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = data;

  
  const loginSubmit = (e) => {
    e.preventDefault();
    let userdata ={
      email:userEmail,
      password:userPassword
    }
    dispatch(loginUser(userdata, () => {
      dispatch(loadUser());
      navigate('/')
      toast.success("login Sucessfully! ...");
    }));
  
  };


  const registerSubmit = (e) => {
    e.preventDefault();
    const signupdata = {   name,email,password }
 console.log(signupdata)
     try {
       toast.promise(
         new Promise((resolve, reject) => {
           axios
             .post(`${server}/register`, signupdata, { withCredentials: true })
             .then((res) => resolve(res.data))
             .catch((error) =>
               reject(error.response ? error.response.data : error)
             );
         }),
         {
           pending: {
             render: () => "Sending Activation email...",
           },
           success: {
             render: ({ data }) => {
              setData({name:'',email:'',password:''})
               return data.message
             }
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
 
  const registerDataChange = (e) => {
     const {name,value} = e.target;
     setData({...data,[name]:value})
  };


  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate('/'); 
    }
  }, [dispatch, error,clearErrors, toast, navigate, isAuthenticated]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
        <Fragment>
         <MetaData title="Login/Signup" />
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <AiFillMail />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="userEmail"
                    value={userEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <AiFillLock />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="userPassword"
                    value={userPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/passwordforgot">Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
              </form>
              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                  <CgProfile />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <AiFillMail />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <AiFillUnlock />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>

                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
          </div>
        </Fragment>
  
  );
};

export default LoginSignUp;

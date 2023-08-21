// userAction.js
import axios from "axios";
import { server } from "../../server";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadUserRequest" });
    const url = `${server}/loaduser`;
    const { data } = await axios.get(url, { withCredentials: true });
    dispatch({ type: "LoadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "LoadUserFail", payload: error.response.data.message });
  }
};

export const loginUser = (userData, callback) => async (dispatch) => {
  try {
    dispatch({ type: "LoginUserRequest" });
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true // Set withCredentials to true
    };
    const url = `${server}/login`;
    const { data } = await axios.post(url, userData, config);  // Corrected order
    console.log(data)
    dispatch({ type: "LoginUserSuccess", payload: data.user });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  } catch (error) {
    dispatch({ type: "LoginUserFail", payload: error.response.data.message });
  }
};


export const registerUser = () => async (dispatch) => {
  try {
    dispatch({ type: "RegisterUserRequest" });
    const url = `${server}/register`;
    const { data } = await axios.post(url, { withCredentials: true });
    dispatch({ type: "RegisterUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "RegisterUserFail", payload: error.response.data.message });
  }
};

export const logoutUser = (callback) => async (dispatch) => {
  try {
    const url = `${server}/logout`;
    const { data } = await axios.post(url, { withCredentials: true });

    dispatch({ type: "LogoutUserSuccess", payload: data.message });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  } catch (error) {
    dispatch({ type: "LogoutUserFail", payload: error.response.data.message });
  }
};



// update user INfo
export const updateUserInfo = (userdata) => async (dispatch) => {
  try {
   
    dispatch({ type: "UpdateUserInfoRequest" });
    const url = `${server}/updateUserInfo`;
    const { data } = await axios.put(url,userdata, { withCredentials: true });

    dispatch({ type: "UpdateUserInfoSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "UpdateUserInfoFail", payload: error.response.data.message });
  }
};


// Updata Password user -admin
export const updatePassword = (userdata) => async (dispatch) => {
  try {
   
    dispatch({ type: "UpdatePasswordRequest" });
    const url = `${server}/updateOldPassword`;
    const { data } = await axios.put(url,userdata, { withCredentials: true });

    dispatch({ type: "UpdatePasswordSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "UpdatePasswordFail", payload: error.response.data.message });
  }
};


export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};

export const clearMessages =() =>async(dispatch) =>{
  dispatch({type:"ClearMessages"})
};

export const clearSuccess =() =>async(dispatch) =>{
  dispatch({type:"ClearSuccess"})
};
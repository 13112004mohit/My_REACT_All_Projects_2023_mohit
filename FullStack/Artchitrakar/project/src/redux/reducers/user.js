import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.isLoading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.isLoading = false;
    state.user = action.payload;
  },
  LoadUserFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },


  // login user
  LoginUserRequest: (state) => {
    state.isLoading = true;
  },
  LoginUserSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.isLoading = false;
    state.user = action.payload;
  },
  LoginUserFail: (state, action) => {
    state.isLoading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },


  // Register User
  RegisterUserRequest: (state) => {
    state.isLoading = true;
  },
  RegisterUserSuccess: (state, action) => {
    state.isAuthenticated = true;
    state.isLoading = false;
    state.user = action.payload;
  },
  RegisterUserFail: (state, action) => {
    state.isLoading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },
 


  // Logout User
  LogoutUserSuccess: (state, action) => {
    state.isAuthenticated = false;
    state.isLoading = false;
    state.message = action.payload
    state.success = action.payload
    state.user = null;
  },
  LogoutUserFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
 

    // Update User Info
    UpdateUserInfoRequest: (state) => {
      state.isLoading = true;
    },
    UpdateUserInfoSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.success = action.payload.success
    },
    UpdateUserInfoFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
   
 

    // Update User Password
    UpdatePasswordRequest: (state) => {
      state.isLoading = true;
    },
    UpdatePasswordSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.success = action.payload.success
    },
    UpdatePasswordFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
      

  

  CLEAR_ERRORS: (state) => {
    state.error = null;
  },

  ClearMessages: (state) => {
    state.message = null;
  },

  ClearSuccess:(state) => {
    state.success = false
  },
});

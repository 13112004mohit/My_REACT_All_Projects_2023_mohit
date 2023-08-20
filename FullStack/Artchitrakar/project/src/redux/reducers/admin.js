import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const AdminReducer = createReducer(initialState, {

  // Show Admin Info ---admin
  ShowAdminInfoRequest: (state) => {
    state.isLoading = true;
  },
  ShowAdminInfoSuccess: (state, action) => {
    state.isLoading = false;
    state.admininfo = action.payload;
  },
  ShowAdminInfoFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all Banner-Images---admin
  getAllBannerRequest: (state) => {
    state.isLoading = true;
  },
  getAllBannerSuccess: (state, action) => {
    state.isLoading = false;
    state.hero = action.payload;
  },
  getAllBannerFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all NewPictures---admin
  getAllNPicturesRequest: (state) => {
    state.isLoading = true;
  },
  getAllNPicturesSuccess: (state, action) => {
    state.isLoading = false;
    state.newpicture = action.payload;
  },
  getAllNPicturesFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all Users ---admin
  getAllUserRequest: (state) => {
    state.isLoading = true;
  },
  getAllUserSuccess: (state, action) => {
    state.isLoading = false;
    state.users = action.payload;
  },
  getAllUserFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all Blogs ---admin
  getAllBlogsRequest: (state) => {
    state.isLoading = true;
  },
  getAllBlogsSuccess: (state, action) => {
    state.isLoading = false;
    state.blogs = action.payload;
  },
  getAllBlogsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all Teams ---admin
  getAllTeamsRequest: (state) => {
    state.isLoading = true;
  },
  getAllTeamsSuccess: (state, action) => {
    state.isLoading = false;
    state.teams = action.payload;
  },
  getAllTeamsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all Images ---admin
  getAllImagesRequest: (state) => {
    state.isLoading = true;
  },
  getAllImagesSuccess: (state, action) => {
    state.isLoading = false;
    state.images = action.payload;
  },
  getAllImagesFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all Services ---admin
  getAllServicesRequest: (state) => {
    state.isLoading = true;
  },
  getAllServicesSuccess: (state, action) => {
    state.isLoading = false;
    state.services = action.payload;
  },
  getAllServicesFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },


  // Create Banner Images ---admin
  CreateBannerRequest: (state) => {
    state.isLoading = true;
  },
  CreateBannerSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload.message;
  },
  CreateBannerFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },


  // Create NewPictures ---admin
  CreateNPictureRequest: (state) => {
    state.isLoading = true;
  },
  CreateNPictureSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload.message;
  },
  CreateNPictureFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },


  // Create Blog ---admin
  CreateBlogRequest: (state) => {
    state.isLoading = true;
  },
  CreateBlogSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload.message;
  },
  CreateBlogFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },


  // Create Team ---admin
  CreateTeamRequest: (state) => {
    state.isLoading = true;
  },
  CreateTeamSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload.message;
  },
  CreateTeamFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },



  // Create Images ---admin
  CreateImagesRequest: (state) => {
    state.isLoading = true;
  },
  CreateImagesSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload.message;
  },
  CreateImagesFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },


  // Create Services ---admin
  CreateServicesRequest: (state) => {
    state.isLoading = true;
  },
  CreateServicesSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload.message;
  },
  CreateServicesFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },



  // Delete Banner-Images ---admin
  DeleteBannerRequest: (state) => {
    state.isLoading = true;
  },
  DeleteBannerSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload.message;
  },
  DeleteBannerFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Delete Banner-Images ---admin
  DeleteNPictureRequest: (state) => {
    state.isLoading = true;
  },
  DeleteNPictureSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload.message;
  },
  DeleteNPictureFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },


  // Delete Blog ---admin
  DeleteBlogRequest: (state) => {
    state.isLoading = true;
  },
  DeleteBlogSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload.message;
  },
  DeleteBlogFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Delete Team ---admin
  DeleteTeamRequest: (state) => {
    state.isLoading = true;
  },
  DeleteTeamSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload.message;
  },
  DeleteTeamFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },


  // Delete Images ---admin
  DeleteImageRequest: (state) => {
    state.isLoading = true;
  },
  DeleteImageSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload.message;
  },
  DeleteImageFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },


  // Delete Services ---admin
  DeleteServicesRequest: (state) => {
    state.isLoading = true;
  },
  DeleteServicesSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload.message;
  },
  DeleteServicesFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
   

    // Delete User -- admin
    DeleteUserRequest: (state) => {
      state.isLoading = true;
    },
    DeleteUserSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    DeleteUserFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
   



    // Update User Role -- admin
    UpdateRoleRequest: (state) => {
      state.isLoading = true;
    },
    UpdateRoleSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    UpdateRoleFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
   

    // Update  Blog -- admin
    UpdateBlogRequest: (state) => {
      state.isLoading = true;
    },
    UpdateBlogSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    UpdateBlogFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
   

    // Update Team info-- admin
    UpdateTeamRequest: (state) => {
      state.isLoading = true;
    },
    UpdateTeamSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    UpdateTeamFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
   


    // Update Service -- admin
    UpdateServiceRequest: (state) => {
      state.isLoading = true;
    },
    UpdateServiceSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    UpdateServiceFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
   


  CLEAR_ERRORS: (state) => {
    state.error = null;
  },

  ClearMessages: (state) => {
    state.message = null;
  },


});

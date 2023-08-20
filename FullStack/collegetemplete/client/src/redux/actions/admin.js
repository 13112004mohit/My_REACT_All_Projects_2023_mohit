import axios from "axios";
import { server } from "../../server";


// Show Admin info --- 
export const ShowAdminInfo = () => async (dispatch) => {
  try {
    dispatch({
      type: "ShowAdminInfoRequest",
    });

    const { data } = await axios.get(`${server}/showadmininfo`, {
      withCredentials: true,
    });

    dispatch({
      type: "ShowAdminInfoSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ShowAdminInfoFailed",
      payload: error.response.data.message,
    });
  }
};

// get all Banners --- 
export const getAllBanners = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllBannerRequest",
    });

    const { data } = await axios.get(`${server}/allhero`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllBannerSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAllBannerFailed",
      payload: error.response.data.message,
    });
  }
};

// get all NewPictures --- 
export const getAllNPictures = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllNPicturesRequest",
    });

    const { data } = await axios.get(`${server}/allnewpicture`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllNPicturesSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAllNPicturesFailed",
      payload: error.response.data.message,
    });
  }
};

// get all Users --- 
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllUserRequest",
    });

    const { data } = await axios.get(`${server}/allUsers`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAllUserFailed",
      payload: error.response.data.message,
    });
  }
};

// get all BLogs --- 
export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllBLogsRequest",
    });

    const { data } = await axios.get(`${server}/allBlogs`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllBlogsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAllBLogsFailed",
      payload: error.response.data.message,
    });
  }
};

// get all Teams --- 
export const getAllImages = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllImagesRequest",
    });

    const { data } = await axios.get(`${server}/allimages`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllImagesSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAllImagesFailed",
      payload: error.response.data.message,
    });
  }
};

// get all Teams --- 
export const getAllTeams = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllTeamsRequest",
    });

    const { data } = await axios.get(`${server}/allteams`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllTeamsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAllTeamsFailed",
      payload: error.response.data.message,
    });
  }
};

// get all Services --- 
export const getAllServices = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllServicesRequest",
    });

    const { data } = await axios.get(`${server}/allservices`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllServicesSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAllServicesFailed",
      payload: error.response.data.message,
    });
  }
};



// ------------------------------Create







  // Create Banner Images ---admin
export const CreateBanner = (bannerdata,callback) => async(dispatch) => {
  try{
   
    dispatch({ type: "CreateBannerRequest" });
    const url = `${server}/createbanner`;
    const  {data} = await axios.post(url,bannerdata, { withCredentials: true });
    dispatch({ type: "CreateBannerSuccess", payload:data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  }catch(error){
    dispatch({ type: "CreateBannerFail", payload: error.response.data.message });
  }     
}

  // Create NewPictures ---admin
export const CreateNPicture= (picturedata,callback) => async(dispatch) => {
  try{
   
    dispatch({ type: "CreateNPictureRequest" });
    const url = `${server}/createnewpicture`;
    const  {data} = await axios.post(url,picturedata, { withCredentials: true });
    dispatch({ type: "CreateNPictureSuccess", payload:data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  }catch(error){
    dispatch({ type: "CreateNPictureFail", payload: error.response.data.message });
  }     
}

  // Create Blog ---admin
export const CreateBlog = (blogdata) => async(dispatch) => {
  try{
   
    dispatch({ type: "CreateBlogRequest" });
    const url = `${server}/createblog`;
    const  {data} = await axios.post(url,blogdata, { withCredentials: true });
    dispatch({ type: "CreateBlogSuccess", payload:data });

  }catch(error){
    dispatch({ type: "CreateBlogFail", payload: error.response.data.message });
  }     
}

  // Create Team ---admin
export const CreateTeam = (teamdata) => async(dispatch) => {
  try{
   
    dispatch({ type: "CreateTeamRequest" });
    const url = `${server}/createteam`;
    const  {data} = await axios.post(url,teamdata, { withCredentials: true });
    dispatch({ type: "CreateTeamSuccess", payload:data });

  }catch(error){
    dispatch({ type: "CreateTeamFail", payload: error.response.data.message });
  }     
}

  // Create Multiple Image ---admin
export const CreateImage = (Imagesdata) => async(dispatch) => {
  try{
   
    dispatch({ type: "CreateImagesRequest" });
    const url = `${server}/createimage`;
    const  {data} = await axios.post(url,Imagesdata, { withCredentials: true });
    dispatch({ type: "CreateImagesSuccess", payload:data });

  }catch(error){
    dispatch({ type: "CreateImagesFail", payload: error.response.data.message });
  }     
}

  // Create Services ---admin
export const CreateService = (servicedata) => async(dispatch) => {
  try{
   
    dispatch({ type: "CreateServicesRequest" });
    const url = `${server}/createservice`;
    const  {data} = await axios.post(url,servicedata, { withCredentials: true });
    dispatch({ type: "CreateServicesSuccess", payload:data });

  }catch(error){
    dispatch({ type: "CreateServicesFail", payload: error.response.data.message });
  }     
}


// ----------------------------------Delete

  // Delete Banner ---admin
export const DeleteBanner = (id,callback) => async(dispatch) => {
  try{
   
    dispatch({ type: "DeleteBannerRequest" });
    const url = `${server}/deletebanner/${id}`;
    const  {data} = await axios.delete(url, { withCredentials: true });
    dispatch({ type: "DeleteBannerSuccess", payload:data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  }catch(error){
    dispatch({ type: "DeleteBannerFail", payload: error.response.data.message });
  }     
}

  // Delete Banner ---admin
export const DeleteNPicture = (id,callback) => async(dispatch) => {
  try{
   
    dispatch({ type: "DeleteNPictureRequest" });
    const url = `${server}/deletenewpicture/${id}`;
    const  {data} = await axios.delete(url, { withCredentials: true });
    dispatch({ type: "DeleteNPictureSuccess", payload:data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  }catch(error){
    dispatch({ type: "DeleteNPictureFail", payload: error.response.data.message });
  }     
}

  // Delete Blog ---admin
export const DeleteBlog = (id,callback) => async(dispatch) => {
  try{
   
    dispatch({ type: "DeleteBlogRequest" });
    const url = `${server}/deleteblog/${id}`;
    const  {data} = await axios.delete(url, { withCredentials: true });
    dispatch({ type: "DeleteBlogSuccess", payload:data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  }catch(error){
    dispatch({ type: "DeleteBlogFail", payload: error.response.data.message });
  }     
}

  // Delete Team ---admin
export const DeleteImage = (id,callback) => async(dispatch) => {
  try{
   
    dispatch({ type: "DeleteImageRequest" });
    const url = `${server}/deleteimage/${id}`;
    const  {data} = await axios.delete(url, { withCredentials: true });
    dispatch({ type: "DeleteImageSuccess", payload:data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  }catch(error){
    dispatch({ type: "DeleteImageFail", payload: error.response.data.message });
  }     
}
  // Delete Team ---admin
export const DeleteTeam = (id,callback) => async(dispatch) => {
  try{
   
    dispatch({ type: "DeleteTeamRequest" });
    const url = `${server}/deleteteam/${id}`;
    const  {data} = await axios.delete(url, { withCredentials: true });
    dispatch({ type: "DeleteTeamSuccess", payload:data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  }catch(error){
    dispatch({ type: "DeleteTeamFail", payload: error.response.data.message });
  }     
}

  // Delete Services  ---admin
export const DeleteServices = (id,callback) => async(dispatch) => {
  try{
   
    dispatch({ type: "DeleteServicesRequest" });
    const url = `${server}/deleteservices/${id}`;
    const  {data} = await axios.delete(url, { withCredentials: true });
    dispatch({ type: "DeleteServicesSuccess", payload:data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  }catch(error){
    dispatch({ type: "DeleteServicesFail", payload: error.response.data.message });
  }     
}


// Delete user -admin
export const DeleteUser = (id,callback) => async (dispatch) => {
  try {
   
    dispatch({ type: "DeleteUserRequest" });
    const url = `${server}/deleteuser/${id}`;
    const { data } = await axios.delete(url, { withCredentials: true });

    dispatch({ type: "DeleteUserSuccess", payload: data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  } catch (error) {
    dispatch({ type: "DeleteUserFail", payload: error.response.data.message });
  }
};






// ------------------------------------Update





// Update User Role -admin
export const UpdateRole = (id,role,callback) => async (dispatch) => {
  try {
 
    dispatch({ type: "UpdateRoleRequest" });
    const url = `${server}/updateuserrole/${id}`;
    const { data } = await axios.put(url,{ role }, { withCredentials: true });

    dispatch({ type: "UpdateRoleSuccess", payload: data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  } catch (error) {
    dispatch({ type: "UpdateRoleFail", payload: error.response.data.message });
  }
};


// Update Blog -admin
export const UpdateBlog = (id,blogdata,callback) => async (dispatch) => {
  try {

    dispatch({ type: "UpdateBlogRequest" });
    const url = `${server}/updateblog/${id}`;
    const { data } = await axios.put(url, blogdata , { withCredentials: true });

    dispatch({ type: "UpdateBlogSuccess", payload: data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  } catch (error) {
    dispatch({ type: "UpdateBlogFail", payload: error.response.data.message });
  }
};


// Update Team inof -admin
export const UpdateTeam = (id,teamdata,callback) => async (dispatch) => {
  try {

    dispatch({ type: "UpdateTeamRequest" });
    const url = `${server}/updateteam/${id}`;
    const { data } = await axios.put(url, teamdata , { withCredentials: true });

    dispatch({ type: "UpdateTeamSuccess", payload: data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  } catch (error) {
    dispatch({ type: "UpdateTeamFail", payload: error.response.data.message });
  }
};


// Update Service inof -admin
export const UpdateServices = (id,servicedata,callback) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateServiceRequest" });
    const url = `${server}/updateservices/${id}`;
    const { data } = await axios.put(url, servicedata , { withCredentials: true });

    dispatch({ type: "UpdateServiceSuccess", payload: data });
    if (callback) {
      callback(); // Invoke the callback function after the update
    }
  } catch (error) {
    dispatch({ type: "UpdateServiceFail", payload: error.response.data.message });
  }
};



// 


export const clearError = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};

export const clearMessage =() =>async(dispatch) =>{
  dispatch({type:"ClearMessages"})
};


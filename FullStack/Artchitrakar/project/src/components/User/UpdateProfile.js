import React, { Fragment, useState, useEffect } from "react";
import "./UpdateProfile.css";
import {RxAvatar} from 'react-icons/rx'
import {MdAddLocationAlt} from 'react-icons/md'
import Loader from '../layout/Loader/Loader'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import { toast } from "react-toastify";
import { clearErrors, clearMessages, clearSuccess, loadUser, updateUserInfo } from "../../redux/actions/user";
import { useNavigate } from "react-router-dom";

const UpdateProfile = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, message, success,isLoading, error } = useSelector(
    (state) => state.user
  );
        const [image, setImage] = useState({ preview: "", data: "" });
        const [formData, setFormData] = useState({
              name: user.name,
              phoneNumber: user.phoneNumber,
              email: user.email,
              address:"",
              });
              const {name,phoneNumber,email,address} = formData;
            
              const handleChange = (e) => {
                const {name,value} = e.target;
                 setFormData({ ...formData, [name]:value });
             };
             
             const handleImage = (e) => {
               e.preventDefault();
               const img = {
                 preview: URL.createObjectURL(e.target.files[0]),
                 data: e.target.files[0],
               };
               setImage(img);
             };
                      
             
             const handleSubmit = async (e) => {
               e.preventDefault();
               try {
                 let userdata = new FormData();
                 userdata.append("name",name)
                 userdata.append("phoneNumber",phoneNumber)
                 userdata.append("email",email)
                 userdata.append("address",address)
                 userdata.append("file", image.data);
                 await dispatch(updateUserInfo(userdata));
                 dispatch(loadUser());
                 setFormData({ name: "", phoneNumber: ""});
                 setImage({ preview: "", data: "" });
               } catch (error) {
                 console.error(error);
               }
             };
 
               useEffect(() => {
                 if (error) {
                   toast.error(error);
                   dispatch(clearErrors());
                   dispatch(clearMessages());
                 }
                 if (success) {
                 toast.success(message);
                 navigate('/profile')
                   dispatch(clearMessages());
                   dispatch(clearSuccess());
                 }
             
               }, [dispatch, error,clearErrors, success,toast,message,clearMessages]);


   
  return (
  <>
         <MetaData title={`Update Profile- ${user.name}`} />
{
  isLoading ? (
     <Loader/>
  ) :(
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Profile</h2>

              <form
                className="updateProfileForm"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="updateProfileName">
                  <RxAvatar />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                <div className="updateProfileEmail">
                  <AiOutlineMail />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="updateProfileEmail">
                  <BsTelephone />
                  <input
                    type="phone"
                    placeholder="Phone Number"
                    required
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="updateProfileEmail">
                  <MdAddLocationAlt />
                  <input
                    type="address"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={handleChange}
                  />
                </div>

                <div id="updateProfileImage">
                {image.preview && (
                    <img src={image.preview} alt="Preview" />    
                )}
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={handleImage}
                    required
                  />
                </div>
                <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn"
                />
              </form>
            </div>
          </div> 
          )}
      </>
  );
};

export default UpdateProfile;

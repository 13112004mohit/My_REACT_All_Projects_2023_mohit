import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { clearErrors } from "../../redux/actions/user";
import { serverimg } from "../../server";

const Profile = ({ history }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
 
    if (!isAuthenticated) {
      navigate("/loginsignup");
    }

    dispatch(clearErrors());
  }, [navigate, dispatch, isAuthenticated]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user && user.name}'s Profile`} />
          <div className="profileContainer">
            <div> 
              <h1>My Profile</h1>
              <div className="profile_img_con">
                <img src={
                 user && user.avatar=== 'nimg' 
                   ?'https://rb.gy/in89r'
                   :  `${serverimg}/${ user && user.avatar}`
                } alt={user && user.name} />
              </div>
              <Link to="/updateprofile">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user && user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user && user.email}</p>
              </div>
              <div>
                <h4>Mobile Number</h4>
                <p>{user && user.phoneNumber}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user && user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/passwordupdate">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;

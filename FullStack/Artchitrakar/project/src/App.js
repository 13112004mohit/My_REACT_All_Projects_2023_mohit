import React, { useEffect } from 'react';
import {Route,Routes,Navigate} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import HomePage from './pages/Home'
import About from './pages/Aboutus'
import Services from './pages/Services'
import Faculity from './pages/Faculity'
import Gallery from './pages/Gallery'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact';
import Footer from './components/Footer'
import GoTop from './components/GoTop';
import Profile from './components/User/Profile'
import LoginSignup from './components/User/LoginSignUp'
import Forgetpass from './components/User/ForgotPassword'
import ActivationPage from './components/User/Activation';
import { loadUser } from './redux/actions/user';
import { useDispatch } from 'react-redux';
import ResetPassword from './components/User/ResetPassword';
import UpdateProfile from './components/User/UpdateProfile';
import UpdatePassword from './components/User/UpdatePassword';
import Dashboard from './pages/Dashboard';
import { ShowAdminInfo, getAllBanners, getAllBlogs, getAllImages, getAllNPictures, getAllServices, getAllTeams, getAllUsers } from './redux/actions/admin';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getAllUsers());
    dispatch(ShowAdminInfo());
    dispatch(getAllBlogs());
    dispatch(getAllTeams());
    dispatch(getAllImages());
    dispatch(getAllServices());
    dispatch(getAllBanners());
    dispatch(getAllNPictures());
  }, [dispatch,loadUser,getAllUsers,ShowAdminInfo,getAllBlogs,getAllTeams,getAllServices,getAllBanners,getAllNPictures]);

  return (
    <>
       <Navbar />

        <Routes>
           <Route path='/' element={<HomePage/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/services' element={<Services/>} /> 
           <Route path='/faculity' element={<Faculity/>} /> 
           <Route path='/gallery' element={<Gallery/>} />
           <Route path='/blogs' element={<Blogs/>} />
           <Route path='/contact' element={<Contact/>} />
           <Route path='/profile' element={<Profile/>} />
           <Route path='/loginsignup' element={<LoginSignup/>} />
           <Route path="/activation/:token" element={<ActivationPage />} />
           <Route path="/password/reset/:token" element={<ResetPassword />} />
           <Route path='/passwordforgot' element={<Forgetpass/>} />
           <Route path='/updateprofile' element={<UpdateProfile/>} />
           <Route path='/passwordupdate' element={<UpdatePassword/>} />

           <Route path='/dashboard' element={<Dashboard/>} />
           
           <Route path="*" element={ <Navigate to="/" />} />
        </Routes>
        
        <Footer/>
        <GoTop/>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </>
  );
}

export default App;
import React from 'react'
import '../style/login.css'
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>

        <section className="login_main_pg">
           <div className="one_col_">
              <div className="form_">
                 <div className="smallboximg_">
                     <img src="logo.png" alt="" />
                 </div>
                <form id='form_boxs' action="">
                    <input placeholder=' enter your name' className='loginname' type="text" name="" id="" />
                    <input placeholder=' enter your password' className='loginpassword' type="text" name="" id="" />
                    <button type="submit" style={{borderRadius:'.5rem', width:'9rem'}}>login</button>
                    <div className="smallbox">
                      <p>forget password</p>
                      <p>
                         <NavLink to={'/'} >signup</NavLink>
                      </p>
                    </div>
                </form>
              </div>
           </div>
        </section>
    
    </>
  )
}

export default Login;
const express = require("express");
const UserModel = require("../model/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const fs = require('fs');
const path = require("path");
const cloudinary =require('cloudinary')


// Image CURD route path
const uploadsPath = path.join(__dirname, '../uploads/');


// Register a User
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  let userEmail = await UserModel.findOne({ email });

  if (userEmail) {
    return next(new ErrorHandler("This User exists already ", 400));
  }

  const user = {
    name: name,
    email: email,
    password: password,
    avatar: `nimg`,
  };

  const activationToken = UserModel().getNewUseractivationToken(user);
  const activationTokenUrl = `${req.protocol}://localhost:3000/activation/${activationToken}`;

  const message = ` <table cellpadding="0" cellspacing="0" style="width: 100%; font-family: Arial, sans-serif; background-color: #f8f8f8;">
  <tr>
    <td align="center" style="padding: 20px;">
      <h1 style="color: #333333; font-size: 24px;">Hi ${user.name}</h1>
      <p style="color: #555555; font-size: 16px; line-height: 1.5;">Welcome to Chitrakars! Start setting up your account by verifying your email address.</p>
      <table cellpadding="0" cellspacing="0" style="margin-top: 20px;">
        <tr>
          <td align="center" bgcolor="#007bff" style="padding: 10px 20px; border-radius: 4px;">
            <a href="${activationTokenUrl}" target="_blank" style="color: #ffffff; text-decoration: none; font-size: 16px;">Verify Email</a>
          </td>
        </tr>
      </table>
      <p style="color: #555555; font-size: 16px; line-height: 1.5; margin-top: 20px;">Thank you for choosing MultiVShop!</p>
      <p style="color: #555555; font-size: 16px; line-height: 1.5;">Best wishes,<br>The MultiVShop Team</p>
      <p style="color: #888888; font-size: 12px;">If you have not requested this email, please ignore it.</p>
    </td>
  </tr>
</table>
`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Activate your account`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `please check your email at ${user.email} to activate your account!`,
    });
  } catch (error) {
    user.userRegisterToken = undefined;
    user.userRegisterExpire = undefined;
    // await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

// User Account Activation 
exports.acccoutActivate = catchAsyncError(async (req, res, next) => {
  const activation_token = req.params.token;

  const newUser = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);

  if (!newUser) {
    return next(new ErrorHandler("Invalid token", 400));
  }
  const { name, email, password, avatar } = newUser;

  let user = await UserModel.findOne({ email });

  if (user) {
    return next(new ErrorHandler("User already exists", 400));
  }

  user = await UserModel.create({
    name,
    email,
    avatar,
    password,
  });

  sendToken(user, 200, res);
});

// Login user
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return next(new ErrorHandler("please enter email & password", 400));
  }
  const user = await UserModel.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid User Creadintials", 401));
  }
  sendToken(user, 200, res);
});

// logout User
exports.logoutUser = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Sucessfully! logged Out ",
  });
});

// Forget Passwords Using Gmail
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  if (!req.body.email) {
    return next(new ErrorHandler("Please enter your email id"));
  }
  const user = await UserModel.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("This email not exist ", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://localhost:3000/password/reset/${resetToken}`;

  const message = `
  <div style="font-family: Arial, sans-serif; text-align: center; background-color: #f8f8f8; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px;">
  <img src="https://i.pinimg.com/236x/41/0c/fc/410cfc469bff65f78702a29b87b70e8b.jpg" alt="Reset Password" style=" width: 15rem;  height: 15rem;  border-radius: 50%;">
  <h2 style="color: #333333; font-size: 18px; margin-bottom: 10px;">Password Reset</h2>
  <p style="color: #555555; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">You have requested to reset your password. Please use the following token:</p>
  <div style="margin-top: 10px;">
    <a href="${resetPasswordUrl}" target="_blank" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 4px;">Reset Password</a>
  </div>
  <p style="color: #555555; font-size: 16px; line-height: 1.5; margin-top: 20px;">If you have not requested a password reset, you can safely ignore this email.</p>
</div>`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Chitrakar Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Please check your email at ${user.email} to reset your password.`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset password
exports.resetPassword = catchAsyncError(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await UserModel.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.cpassword) {
    return next(new ErrorHandler("Password does not matched", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});


// load user --for Automatically loggedin user in frontend if cookie not expire
exports.loadUser = catchAsyncError(async (req, res, next) => {
  if(!req.user){
    return next(new ErrorHandler("Please Login!", 400));
  }

  const user = await UserModel.findById(req.user.id);
  res.status(200).json({
    success: true,
    message: "welcome to MultiVSA",
    user,
  });
});


// load All-User --for Automatically loggedin user in frontend if cookie not expire
exports.getallUsers = catchAsyncError(async (req, res, next) => {
  const users = await UserModel.find({}).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    users,
  });
});


//Show Admin -info such as phone number or email id so on...
exports.ShowAdminInfo = catchAsyncError(async (req, res, next) => {

  const admininfo = await UserModel.findOne({email:'mohit13112004@gmail.com'});
  res.status(200).json({
    success: true,
    admininfo,
  });
});




// Update User Info
exports.updateUserInfo = catchAsyncError(async (req, res, next) => {
  const { email, name, phoneNumber ,address } = req.body;
  
  if(email !== req.user.email){
    return next(new ErrorHandler("provide correct email", 400));
  }

  let user = await UserModel.findById(req.user.id);

  if (!user) {
    return next(new ErrorHandler("User not found", 400));
  }
    // --------------------------------
    if (!req.file || !req.file.filename) {
      return next(new ErrorHandler("No Picture Recived ", 400));
    }
  
    const image = req.file.filename;
    const oldImagePath = path.join(uploadsPath, user.avatar);
    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath);
    }

  const userData = {
    name,
    phoneNumber,
    address,
    avatar:`avatar/${image}`,
  };
  user = await UserModel.findByIdAndUpdate(req.user.id, userData);

  res.status(201).json({
    success: true,
    message: "Sucessfully! Updated",
    user,
  });
});

// Update User Password
exports.updateOldPassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword, cPassword } = req.body;
  let user = await UserModel.findOne({ _id: req.user.id }).select("+password");

  if (!user) {
    return next(new ErrorHandler("User not Found", 400));
  }

  const OldPasswordValid = await user.comparePassword(oldPassword);
  if (!OldPasswordValid) {
    return next(new ErrorHandler("Provide Corrent Information", 400));
  }

  if (newPassword !== cPassword ) {
    return next(new ErrorHandler("Password does not matched", 400));
  }
  
  if (newPassword.length < 4) {
    return next(new ErrorHandler("Your password too short", 400));
  }

  user.password = newPassword;
  user.save();

  res.status(201).json({
    success: true,
    message: "Password Updated!",
    user,
  });
});


// Update User Role
exports.updateUserRole = catchAsyncError(async (req, res, next) => {
  const {role} = req.body;
  let admin = await UserModel.findOne({ _id: req.user.id });
  let user = await UserModel.findById(req.params.id);

  if (!admin || user.email==='mohit13112004@gmail.com') {
    return next(new ErrorHandler("Can't Access this resources", 400));
  }
 
  if(!user){
    return next(new ErrorHandler("user not found ", 400));
  }


  user.role = role;
  user.save();

  res.status(201).json({
    success: true,
    message: "Role Updated!",
    user,
  });
});



// delete Single-User
exports.deleteUser = catchAsyncError(async (req,res,next) => {
  try {
    let user = await UserModel.findById(req.params.id);

    if(user.email==='mohit13112004@gmail.com'){
      return next(new ErrorHandler("admin cant' be deleted", 400));
    }
    if(!user){
      return next(new ErrorHandler("user not found ", 400));
    }
    const currentPublicId = user.avatar.public_id;
  
    // Remove the current avatar from Cloudinary
    if (currentPublicId) {
      await cloudinary.uploader.destroy(currentPublicId);
    }
    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: `${user.role} deleted Successfully!`,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
})

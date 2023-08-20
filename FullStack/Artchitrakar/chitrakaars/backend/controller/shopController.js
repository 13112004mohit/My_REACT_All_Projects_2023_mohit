const express = require("express");
const path = require("path");
const ShopModel = require("../model/shopModel");
const shopToken = require("../utils/shopToken");
const sendEmail = require("../utils/sendEmail");
const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const cloudinary = require("cloudinary").v2;
const catchAsyncError = require("../middleware/catchAsyncErrors");

// Register a Seller
exports.registerSeller = catchAsyncError(async (req, res, next) => {
  const { name, email, password, address, phoneNumber, zipCode } = req.body;
  let sellerEmail = await ShopModel.findOne({ email });

  if (sellerEmail) {
    return next(new ErrorHandler("Seller already exists", 400));
  }

  const seller = {
    name,
    email,
    password,
    avatar: {
      public_id: "myCloud.public_id",
      url: "myCloud.secure_url",
    },
    address,
    phoneNumber,
    zipCode,
  };

  const activationToken = ShopModel().getNewSelleractivationToken(seller);
  const activationTokenUrl = `${req.protocol}://localhost:3000/shop/activation/${activationToken}`;

  const message = ` <table cellpadding="0" cellspacing="0" style="width: 100%; font-family: Arial, sans-serif; background-color: #f8f8f8;">
  <tr>
    <td align="center" style="padding: 20px;">
      <h1 style="color: #333333; font-size: 24px;">Hi ${seller.name}</h1>
      <p style="color: #555555; font-size: 16px; line-height: 1.5;">Welcome to MultiVShop! Start setting up your Shop Account by verifying your email address.</p>
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
      email: seller.email,
      subject: `Activate Seller Shop`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `please check your email at ${seller.email} to activate your shop!`,
    });
  } catch (error) {
    user.userRegisterToken = undefined;
    user.userRegisterExpire = undefined;
    // await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

// seller Account Activation
exports.ActivateShop = catchAsyncError(async (req, res, next) => {
  const activation_token = req.params.token;

  const newSeller = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);

  if (!newSeller) {
    return next(new ErrorHandler("Invalid token", 400));
  }
  const { name, email, password, avatar, address, phoneNumber, zipCode } = newSeller;

  let seller = await ShopModel.findOne({ email });

  if (seller) {
    return next(new ErrorHandler("seller already exists", 400));
  }

  seller = await ShopModel.create({
    name,
    email,
    avatar,
    password,
    address,
    phoneNumber,
    zipCode,
  });

  shopToken(seller, 200, res);
});


// Login user
exports.loginSeller = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("please enter email & password", 400));
  }
  const seller = await ShopModel.findOne({ email }).select("+password");
  if (!seller) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const isPasswordMatched = await seller.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid  Creadintials", 401));
  }
  shopToken(seller, 200, res);
});

// logout User
exports.logoutSeller = catchAsyncError(async (req, res, next) => {
  res.cookie("seller_token", null, {
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
      subject: `Ecommerce Password Recovery`,
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

// loadSeller --for Automatically loggedin user in frontend if cookie not expire
exports.loadSeller = catchAsyncError(async (req, res, next) => {
  const seller = await ShopModel.findById(req.seller.id);

  res.status(200).json({
    success: true,
    message: "welcome to MultiVSA",
    seller,
  });
});

// Profile Picture in Cloudinary
cloudinary.config({
  cloud_name: "dzo85iqic",
  api_key: "846153654198125",
  api_secret: "DNjYXnbdCyJoNlLHajLCWU1Sj5E",
});

exports.updateProfileImage = catchAsyncError(async (req, res, next) => {
  if (req.user == undefined || req.user == null) {
    return next(new ErrorHandler("Please login to upload an image.", 400));
  }

  // --------------------------------
  if (!req.files || !req.files.file) {
    return next(new ErrorHandler("No File Recived", 400));
  }

  const file = req.files.file;
  const userId = req.user.id;

  try {
    // Get the user's current avatar public_id
    const user = await UserModel.findById(userId);
    const currentPublicId = user.avatar.public_id;

    // Remove the current avatar from Cloudinary
    if (currentPublicId) {
      await cloudinary.uploader.destroy(currentPublicId);
    }

    // Upload the new avatar to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "avatars", // Optional: Specify a folder to store the uploaded images
    });

    const newAvatarUrl = uploadResult.secure_url;
    const newPublicId = uploadResult.public_id;

    // Update the user's avatar URL and public_id in the database
    await UserModel.findByIdAndUpdate(userId, {
      "avatar.url": newAvatarUrl,
      "avatar.public_id": newPublicId,
    });

    res.status(200).json({ message: "Profile picture uploaded!" });
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler("Failed to upload profile picture.", 500));
  }
});

// Update User Info
exports.updateUserInfo = catchAsyncError(async (req, res, next) => {
  const { password, name, phoneNumber } = req.body;
  let user = await UserModel.findOne({ email: req.user.email }).select(
    "+password"
  );

  if (!user) {
    return next(new ErrorHandler("User not found", 400));
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return next(new ErrorHandler("provide correct information", 400));
  }
  const userData = {
    name,
    phoneNumber,
  };
  user = await UserModel.findByIdAndUpdate(req.user.id, userData);

  res.status(201).json({
    success: true,
    message: "Sucessfully! Updated",
    user,
  });
});
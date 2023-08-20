const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/userModel");
const ShopModel = require("../model/shopModel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  
  if (!token) {
    return next(new ErrorHandler("please login to access All resource", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await UserModel.findById(decoded.id);
  next();
});

exports.isSeller = catchAsyncErrors(async(req,res,next) => {
  const {seller_token} = req.cookies;
  if(!seller_token){
      return next(new ErrorHandler("Please login to continue", 401));
  }

  const decoded = jwt.verify(seller_token, process.env.JWT_SECRET_KEY);
   
  req.seller = await ShopModel.findById(decoded.id);
  next();
});


exports.isAdmin = (...roles) => {
  return (req,res,next) => {
      if(!roles.includes(req.user.role)){
          return next(new ErrorHandler(`${req.user.role} can not access this resources!`))
      };
      next();
  }
}
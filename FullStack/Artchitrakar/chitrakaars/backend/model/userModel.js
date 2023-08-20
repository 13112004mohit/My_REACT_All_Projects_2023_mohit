const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const moment = require("moment-timezone");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email!"],
    unique: true,
    validate: [validator.isEmail, "please enter a vlid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [4, "Password should be greater than 4 characters"],
    select: false,
  },
  phoneNumber: {
    type: Number,
  },
  address:{
    type:String
  },
  role: {
    type: String,
    default: "user",
  },
  avatar: {
      type:String
  },
  createdAt: {
    type: Date,
    default: moment().tz("Asia/Kolkata").toDate(),
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,

  userRegisterToken: String,
  userRegisterExpire: Date,
});

//  Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generating password reset Token
userSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

// Generating Token for register new user
userSchema.methods.getNewUseractivationToken = function (user) {
  // Generating Token
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn:process.env.ACTIVATION_EXPIRE 
  });
};

module.exports = mongoose.model("User", userSchema);

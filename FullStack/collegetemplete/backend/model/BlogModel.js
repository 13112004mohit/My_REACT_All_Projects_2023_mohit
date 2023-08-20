const mongoose = require("mongoose");
const moment = require("moment-timezone");

const BlogSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "Please enter your Blog name!"],
  },
  category: {
    type: String,
    required: [true, "Please enter your Blog category!"],
  },
  description: {
    type: String,
    required: [true, "Please enter your Blog description!"],
  },
  image: {
    type:String,
  },
  mobileNumber:{
   type:Number
  },
  createdby: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name:{
        type:String,
        required:true,
      },
      image:{
        type:String
      }
    },
  ],

  createdAt: {
    type: Date,
    default: moment().tz("Asia/Kolkata").toDate(),
  },
});

module.exports = mongoose.model("Blog", BlogSchema);

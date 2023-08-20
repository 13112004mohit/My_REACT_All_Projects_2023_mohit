const mongoose = require("mongoose");
const moment = require("moment-timezone");

const NewPictureSchema = new mongoose.Schema({
 heading:{
   type:String,
   required:[true,'please write your picture name']
 },
  image: {
   type:String
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

module.exports = mongoose.model("NewPicture",NewPictureSchema);

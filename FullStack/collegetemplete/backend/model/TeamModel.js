const mongoose = require("mongoose");
const moment = require("moment-timezone");

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your Team name!"],
  },
  position: {
    type: String,
    required: [true, "Please enter your work position!"],
  },
  degree: {
    type: String,
    required: [true, "Please enter your Degree!"],
  },
  image: {
    type:String,
  },
  Whatsapp:{
   type:Number
  },
  facebook:{
   type:String
  },
  instagram:{
   type:String
  },
  twitter:{
   type:String
  },
  youtube:{
   type:String
  },


  createdAt: {
    type: Date,
    default: moment().tz("Asia/Kolkata").toDate(),
  },
});

module.exports = mongoose.model("Team", TeamSchema);

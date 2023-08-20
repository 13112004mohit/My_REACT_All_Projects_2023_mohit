const mongoose = require("mongoose");
const moment = require("moment-timezone");

const HeroSchema = new mongoose.Schema({

  image: {
    type:String,
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

module.exports = mongoose.model("Hero",HeroSchema);

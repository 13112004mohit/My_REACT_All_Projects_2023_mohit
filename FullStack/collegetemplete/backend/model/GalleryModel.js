const mongoose = require("mongoose");
const moment = require("moment-timezone");

const GallerySchema = new mongoose.Schema({

  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
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

module.exports = mongoose.model("Gallery",GallerySchema);

const mongoose = require("mongoose");
const moment = require("moment-timezone");

const ImgSchema = new mongoose.Schema({

  image: {
    type:String,
  },

});

module.exports = mongoose.model("Img", ImgSchema);

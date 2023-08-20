const mongoose = require("mongoose");
const moment = require("moment-timezone");

const ServicesSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "Please enter your Team name!"],
  },
  description: {
    type: String,
    required: [true, "Please enter your work position!"],
  },
  image: {
    type:String,
  },
  createdAt: {
    type: Date,
    default: moment().tz("Asia/Kolkata").toDate(),
  },
});

module.exports = mongoose.model("Services", ServicesSchema);

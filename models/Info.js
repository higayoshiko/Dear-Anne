const mongoose = require("mongoose");

const infoSchema = {
  _id: Number,
  nickname: {
    type: String,
    required: true
  },
  aboutMe: String,
  img: {
    data: Buffer,
    contentType: String
  }
}

module.exports = mongoose.model("Info", infoSchema);

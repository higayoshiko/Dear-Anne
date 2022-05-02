const mongoose = require("mongoose");

const infoSchema = {
  nickname: {
    type: String,
    required: true,
    default: "Nickname"
  },
  aboutMe: {
    type: String,
    default: "About me"
  }
}

module.exports = mongoose.model("Info", infoSchema);


// img: {
//   data: Buffer,
//   contentType: String
// }

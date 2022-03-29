const mongoose = require("mongoose");

const entrySchema = {
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true}
}

module.exports = mongoose.model("Entry", entrySchema);

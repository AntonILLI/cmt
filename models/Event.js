const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title"]
  },
  description: {
    type: String,
    required: [true, "Please add a description"]
  },
  photo: {
    type: String,
    default: "no-photo.jpg"
  },
  url: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Event", EventSchema);

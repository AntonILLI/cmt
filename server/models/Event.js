const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a course title"]
  },
  description: {
    type: String,
    required: [true, "Please add a description"]
  },
  photo: {
    type: String,
    default: "no-photo.jpg"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("Event", EventSchema);

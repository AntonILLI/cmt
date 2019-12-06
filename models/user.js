const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please add a firstname"],
    trim: true,
    maxlength: [10, "First Name can not be more than 10 characters"]
  },
  lastname: {
    type: String,
    required: [true, "Please add a lastname"],
    trim: true,
    maxlength: [10, "Last Name can not be more than 10 characters"]
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please add a valid email"
    ]
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    miflength: 6
  },
  careers: {
    type: [String],
    enum: [
      "Piano",
      "viollin",
      "guitar",
      "flute",
      "Jazz",
      "vacal training",
      "Other"
    ]
  },
  title: {
    type: String,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String
  },
  pricing: {
    type: [Number]
  },
  photo: {
    type: String,
    default: "no-photo.jpg"
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//Encript password using bcrypt hash//unless not modified the password, skip the hashing
UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//Sign JWT mongo id//add expire time
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

//compare user entered password & hashed password
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//reset password and generate hashed token
UserSchema.methods.getResetPasswordToken = function() {
  //Generate token //randomBytes generate random data //buffer formatted to string
  const resetToken = crypto.randomBytes(20).toString("hex");
  //Hash token and ,'sha256'//digest as hex string
  //about cript hashing--> https://nodejs.org/en/knowledge/cryptography/how-to-use-crypto-module/
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set expire date
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);

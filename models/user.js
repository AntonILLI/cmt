const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const encrypt = require("../utils/encrypt");
const decrypt = require("../utils/decrypt");
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please add a firstname"],
    trim: true,
    maxlength: [20, "First Name can not be more than 10 characters"]
  },
  lastname: {
    type: String,
    required: [true, "Please add a lastname"],
    trim: true,
    maxlength: [20, "Last Name can not be more than 10 characters"]
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
    minlength: 6
  },
  phone: {
    type: String,
    minlength: 8
  },
  careers: {
    type: [String]
  },

  description: {
    type: String
  },
  price: {
    type: [String]
  },

  photo: {
    type: String,
    default: "no-photo.jpg"
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await encrypt(this.password);
  // const salt = await bcrypt.genSalt(10);
  // this.password = await bcrypt.hash(this.password, salt);
});

//Sign JWT mongo id//add expire time
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

UserSchema.methods.matchPassword = async function(enteredPassword) {
  this.password = await decrypt(this.password);
  console.log("pass:", this.password);
  if (this.password === enteredPassword) {
    return this.password;
  }
  // return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.getResetPasswordToken = function() {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set expire
  this.resetPasswordExpire = Date.now() + 3600000;

  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);

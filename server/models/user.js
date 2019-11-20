const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  firstname: {
    type: String,
    trim: true,
    maxlength: 32
  },
  lastname: {
    type: String,
    trim: true,
    maxlength: 32
  },
  category: {
    type: Array
  },
  bio: {
    type: String,
    maxlength: 1000,
    default: ""
  },
  teacherInfo: {
    type: String,
    maxlength: 1000,
    default: ""
  },
  thumbnail: {
    type: String,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now()
  },
  pricing: {
    type: Array
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});

//pre before save() run function //es6 does not work
//user = userShema//isModified if someting modified ,run

userSchema.pre("save", function(next) {
  var user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        } else {
          user.password = hash;
          next();
        }
      });
    });
  } else {
    next();
  }
});
//when compare the password , cb will be run then go back
//login function ,1 argment is props, 2 is function

userSchema.methods.comparePassword = function(userPassword, callback) {
  bcrypt.compare(userPassword, this.password, function(err, hasMatch) {
    if (err) {
      return callback(err);
    } else {
      callback(null, hasMatch);
    }
  });
};

userSchema.methods.generateToken = function(callback) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), process.env.PRIVATE);
  //to convert Hex decimal from string
  user.token = token;
  user.save(function(err, user) {
    if (err) {
      return callback(err);
    } else {
      callback(null, user);
    }
  });
};

userSchema.statics.findByToken = function(token, cb) {
  var user = this;

  jwt.verify(token, process.env.PRIVATE, function(err, decode) {
    user.findOne({ _id: decode, token: token }, function(err, user) {
      if (err) return cb(err);

      cb(null, user);
    });
  });
};

module.exports = mongoose.model("user", userSchema);

const { User } = require("../models/user");

exports.getUser = (req, res) => {
  const users = User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
};

exports.saveUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.status(400).send(err);
    // res.json({ success: false, err });
    res.status(200).json({
      success: true,
      user: doc
    });
  });
};

exports.authUser = (req, res) => {
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    password: req.user.password,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    category: req.user.category,
    bio: req.user.bio,
    teacherInfo: req.user.teacherInfo,
    role: req.user.role
  });
};

exports.loginUser = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) return res.status(400).send(err);
    // return res.json({
    //   loginSuccess: false,
    //   message: "Authentication fail,Email not found"
    // });

    user.comparePassword(req.body.password, (err, hasMatch) => {
      if (!hasMatch) return res.status(400).send(err);
      //res.json({ loginSuccess: false, message: "Wrong Password" })

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie("w_auth", user.token)
          .status(200)
          .json({
            loginSuccess: true
          }); //cookie generate token store in the cookie..cookie token is not valid when expired, hard to decode
      });
    });
  });
};

exports.logoutUser = (req, res) => {
  User.findOneAndUpdate({ _id: req._id }, { token: "" }, (err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      return res.status(200).send({
        success: true
      });
    }
  });
};
//comparePassword() one argument is password, 2 is function cal back

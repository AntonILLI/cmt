const express = require("express");
//express multiple middleware request untill response
const { auth } = require("../helpers/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/user");
const router = express.Router();

//get user
router.get("/user", async (req, res) => {
  const users = User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
});

//auth user
router.get("/user/auth", auth, (req, res) => {
  // const users = User.find().then(user => {
  //   res.json(user);
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    bio: req.user.bio,
    teacherInfo: req.user.teacherInfo,
    role: req.user.role
  });
});
//logout
router.get("/user/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      return res.status(200).send({
        success: true
      });
    }
  });
});

//register user
// router.post("/user/register", async (req, res) => {
//   const user = await new User(req.body);
//   user.save((err, doc) => {
//     if (err) {
//       return res.status(400).send({ success: false, message: err });
//     } else {
//       res.status(200).json({
//         success: true,
//         user: doc
//       });
//     }
//   });
// });
//login user
router.post("/user/login", async (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.status(400).send({
        loginSuccess: false,
        message: "Authentication fail,Email not found"
      });

    user.comparePassword(req.body.password, (err, hasMatch) => {
      if (!hasMatch)
        return res
          .status(400)
          .send({ loginSuccess: false, message: "Wrong Password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie("w_auth", user.token)
          .status(200)
          .json({
            loginSuccess: true
          });
      });
    });
  });
});

router.post(
  "/user/save",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    const user = await new User(req.body);
    user.save((err, doc) => {
      if (err) {
        return res.status(400).send({ success: false, message: err });
      } else {
        res.status(200).json({
          success: true,
          user: doc
        });
      }
    });
  }
);

router.put("/user/:id", auth, async (req, res, file) => {
  try {
    let user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "Counl not found" });

    if (user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }
    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    return res.status(500).json({ message: "server error" });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    let user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "Contact not found" });

    if (user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await User.findByIdAndRemove(req.params.id);

    res.json({ message: "Contact removed" });
  } catch (err) {
    return res.status(500).json({ message: "server error" });
  }
});

module.exports = router;

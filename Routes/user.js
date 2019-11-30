const express = require("express");
//express multiple middleware request untill response
const { auth } = require("../helpers/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/user");
const router = express.Router();

// const fileUpload = require("express-fileupload");
// const multer = require("multer");

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

// const storage = multer.diskStorage({
//   destination: "./public/uploads/",
//   filename: function(req, file, cd) {
//     cd(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     ); //jpeg , gif
//     //1 null, file name,timestamp,inputname//file.fieldname
//   }
// });
//init upload

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 },
//   fileFilter: function(req, file, cb) {
//     checkFileType(file, cb);
//   }
// }).single("myImage"); //field name //multiple use array html enctype= 'multipart/form-data
// function checkFileType(file, cb) {
//   // Allowed extensions
//   const filetypes = /jpeg|jpg|png|gif/;
//   //check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   //check mime
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cd("Error: Images only!");
//   }
// }

// app.post("/upload", (res, req) => {
//   upload(req, res, err => {
//     if (err) {
//       res.render("index", {
//         msg: err
//       });
//     } else {
//       if (req.file == undefined) {
//         res.render("index", {
//           msg: "Error:No File Selected!"
//         });
//       } else {
//         res.render("index", {
//           msg: "File Uploaded!",
//           file: `uploads/${req.file.filename}`
//         });
//       }
//     }
//   });
// });

//<img src="">

// app.use(fileUpload());
// app.post("/upload", (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }
//   const file = req.files.file;
//   //mv move
//   file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }
//     res.json({ filename: file.name, filePath: `/uploads/${file.name}` });
//   });
// });

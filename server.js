const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const path = require("path");
const userRoutes = require("./Routes/user");
const fileUpload = require("express-fileupload");
const multer = require("multer");

mongoose
  .connect("mongodb://admin:c107152cc@dbh22.mlab.com:27227/music-teacher", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB Connected");
  });
// .catch(err => console.error(err));

var db = mongoose.connection;

db.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.use(bodyParser.urlencoded({ extended: true }));
//allow to yeld some res, req function
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(cookieParser());

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
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Rocken roll on port ${PORT}`));

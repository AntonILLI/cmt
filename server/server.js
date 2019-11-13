const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const path = require('path');


app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



const userRoutes = require("./Routes/user");
//localhost:27017/waves
//mongodb+srv://admin:admin@cluster0-xngyq.mongodb.net/test?retryWrites=true&w=majority
//mongodb://localhost:27017/server

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

//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// })

db.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});

app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));
//allow to yeld some res, req function

app.use(cookieParser());

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Rocken roll on port ${PORT}`));

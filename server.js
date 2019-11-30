const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const path = require("path");
const userRoutes = require("./Routes/user");

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
app.use(bodyParser.urlencoded({ extended: true }));
//allow to yeld some res, req function
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(cookieParser());

app.use("/api", userRoutes);

// dont move below code //
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Rocken roll on port ${PORT}`));

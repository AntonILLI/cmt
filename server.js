const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
var bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const mongoose = require("mongoose");
//const errorHandler = require("./middleware/error.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config({ path: "./config/config.env" });

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
  console.log(`MongoDB Connected:${conn.connection.host}`.cyan.underline.bold);
};

connectDB();

//Route
const auth = require("./routes/auth");
const users = require("./routes/users");
const blogs = require("./routes/blogs");
const app = express();

app.use(express.json());
//Cookie parser
app.use(cookieParser());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(fileupload());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  next();
});

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Authorization, Content-Type, Accept"
//   );
//   next();
// });
//set static folder // read file
app.use(express.static(path.join(__dirname, "pablic")));
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/blogs", blogs);
//app.use(errorHandler);

// dont move below code //NodODE_ENV = development
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;

const server = app.listen(
  PORT,
  console.log(
    `Server rocking on the ${process.env.NODE_ENV} 
made on port ${PORT}
`.yellow.bold
  )
);

//Handle unhandled rejections connection reject
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`.red);
  server.close(() => process.exit(1));
});

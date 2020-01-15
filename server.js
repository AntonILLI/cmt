const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
var bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/error.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

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
const events = require("./routes/events");
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
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/events", events);
app.use(errorHandler);

// dont move below code //NodODE_ENV = development
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

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


app.post('/send', (req, res) => {

  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${name} <${email}>`, // sender address
    to: "bar@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>${message}</b>` // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

});
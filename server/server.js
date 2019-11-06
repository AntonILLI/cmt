const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");

const userRoutes = require("./Routes/user");
mongoose
  .connect("mongodb://localhost:27017/server", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("DB Connected");
  });

mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});

app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));
//allow to yeld some res, req function

app.use(cookieParser());

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Rocken roll on port ${PORT}`));

const express = require("express");
//express multiple middleware request untill response
const { auth } = require("../helpers/auth");

const router = express.Router();

const {
  getUser,
  authUser,
  saveUser,
  loginUser,
  logoutUser
} = require("../controllers/user");

router.get("/user", getUser);
router.get("/user/auth", auth, authUser);
router.get("/user/logout", auth, logoutUser);
router.post("/user/register", saveUser);
router.post("/user/login", loginUser);

module.exports = router;

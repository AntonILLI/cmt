const express = require("express");
const {
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword
} = require("../controllers/auth");
const router = express.Router();
const { authorize, protect } = require("../middleware/auth");

router.post("/login", login);
router.get("/logout", logout);
router.get("/userlogin", protect, getMe);
router.post("/forgotPassword", forgotPassword);
router.put("/resetPassword/:rtoken", resetPassword);

module.exports = router;

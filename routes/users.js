const express = require("express");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  userPhotoUpload
} = require("../controllers/users");
const User = require("../models/user");

const router = express.Router();
const advancedResults = require("../middleware/advancedResults");
const { protect } = require("../middleware/auth");
//advancedResults
//all below protect route using mergeParams:true

// router.use(protect);

router.get("/", advancedResults(User), getUsers).post("/create", createUser);

router.route("/admin").get(advancedResults(User), getUsers);

router

  .get("/:id", protect, getUser)
  .put("/:id/update", updateUser) //p
  .delete("/:id/delete", deleteUser); //p

// router.route("/:id/photo").put(protect, userPhotoUpload);
module.exports = router;

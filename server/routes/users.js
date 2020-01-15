const express = require("express");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  userPhotoUpload
} = require("../controllers/users");
const User = require("../models/User");

const router = express.Router();
const advancedResults = require("../middleware/advancedResults");
const { protect } = require("../middleware/auth");
//advancedResults
//all below protect route using mergeParams:true

// router.use(protect);

router.route("/").get(advancedResults(User), getUsers);

router.route("/admin").get(advancedResults(User), getUsers);

router
  .route("/:id")
  .post(protect, createUser)
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

router.route("/:id/photo").put(protect, userPhotoUpload);
module.exports = router;

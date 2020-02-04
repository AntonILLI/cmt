const express = require("express");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  userPhotoUpload
} = require("../controllers/users");
<<<<<<< HEAD
const User = require("../models/User");
=======
const User = require("../models/user");
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb

const router = express.Router();
const advancedResults = require("../middleware/advancedResults");
const { protect } = require("../middleware/auth");
//advancedResults
//all below protect route using mergeParams:true

// router.use(protect);

router.get("/", advancedResults(User), getUsers).post("/create", createUser);

router.route("/admin").get(advancedResults(User), getUsers);

router
  .get("/:id", getUser) //P
  .put("/:id/update", updateUser) //p
  .delete("/:id/delete", deleteUser); //p

// router.route("/:id/photo").put(protect, userPhotoUpload);
module.exports = router;

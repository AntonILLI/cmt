const express = require("express");

const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog
} = require("../controllers/blogs");

const Blog = require("../models/Blog");

const router = express.Router({ mergeParams: true });
const advancedResults = require("../middleware/advancedResults");
const { authorize, protect } = require("../middleware/auth");

router
  .route("/")
  .get(
    advancedResults(Blog, {
      path: "user",
      select: "name description"
    }),
    getBlogs
  )
  .post(protect, createBlog);
//getCOurse func populate({path:'bootcamp',select:'name descroption '})populate path them
router
  .route("/:id")
  .get(getBlog)
  .put(protect, updateBlog)
  .delete(protect, deleteBlog);
//cant not (/:id/id)get(:/id)
module.exports = router;

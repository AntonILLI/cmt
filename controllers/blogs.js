const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Blog = require("../models/Blog");
const User = require("../models/User");

exports.getBlogs = asyncHandler(async (req, res, next) => {
  if (req.params.userId) {
    const blogs = await Blog.find({ user: req.params.userId });

    return res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

exports.getBlog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id).populate({
    path: "user",
    select: "name description"
  });
  // const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(
      new ErrorResponse(`No blog with the id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    count: blog.length,
    data: blog
  });
});

//@route POST/api/v1/blogs/:userId
//access Private

exports.createBlog = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  //cheked duplicate create
  let blog = await Blog.find({ user: req.user.id });

  if (!blog) {
    return next(
      new ErrorResponse(`No user with the Id of  ${req.user.id}`, 404)
    );
  }

  blog = await Blog.create(req.body);

  res.status(201).json({ success: true, data: blog });
});

// @route     PUT /api/v1/courses/:id// @access    Private
exports.updateBlog = asyncHandler(async (req, res, next) => {
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(
      new ErrorResponse(`No blog with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is course owner
  if (blog.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update course ${blog._id}`,
        401
      )
    );
  }

  blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: blog
  });
});

// @route     DELETE /api/v1/courses/:id
// @access    Private
exports.deleteBlog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(
      new ErrorResponse(`No blog with the id of ${req.params.id}`),
      404
    );
  }

  if (blog.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete blog ${course._id}`,
        401
      )
    );
  }

  await blog.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Event = require("../models/Event");
const User = require("../models/User");

exports.getEvents = asyncHandler(async (req, res, next) => {
  if (req.params.userId) {
    const events = await Event.find({ user: req.params.userId });

    return res.status(200).json({
      success: true,
      count: events.length,
      data: events
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

exports.getEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id).populate({
    path: "user",
    select: "name description"
  });
  // const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(
      new ErrorResponse(`No event with the id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    count: event.length,
    data: event
  });
});

//@route POST/api/v1/blogs/:userId
//access Private

exports.createEvent = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id;

  //cheked duplicate create
  let event = await Event.find({ user: req.user.id });

  if (!event) {
    return next(
      new ErrorResponse(`No user with the Id of  ${req.user.id}`, 404)
    );
  }

  event = await Event.create(req.body);

  res.status(201).json({ success: true, data: event });
});

// @route     PUT /api/v1/courses/:id// @access    Private
exports.updateEvent = asyncHandler(async (req, res, next) => {
  let event = await Event.findById(req.params.id);

  if (!event) {
    return next(
      new ErrorResponse(`No event with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is course owner
  if (event.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update event`,
        401
      )
    );
  }

  event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: event
  });
});

// @route     DELETE /api/v1/courses/:id
// @access    Private
exports.deleteEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    return next(
      new ErrorResponse(`No blog with the id of ${req.params.id}`),
      404
    );
  }

  if (event.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete event`,
        401
      )
    );
  }

  await event.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});

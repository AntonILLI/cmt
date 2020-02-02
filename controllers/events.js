const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Event = require("../models/Event");
const User = require("../models/user");
const path = require("path");

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

  if (!event) {
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
  console.log(req.files); //file objects... size,encoding,mimetype
  //startswith mimetype -->'image'/jpeg//the file will be accessible from req.files.

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const photo = req.files.photo;

  // Make sure the image is a photo
  if (!photo.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (photo.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  // Create custom filename
  console.log(__filename);
  // photo.name = `photo_${path.parse(photo.name).ext}`;//override the name with ext but some how does not work

  photo.mv(
    `${__dirname}/${process.env.FILE_UPLOAD_PATH}/${photo.name}`,
    async err => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem with file upload`, 500));
      }

      const { description, title, url } = req.body;
      const TEvent = await Event.create({
        description,
        title,
        url,
        photo: photo.name,
        filePath: `/uploads/${photo.name}`
      });

      res.status(200).json({
        success: true,
        data: TEvent
      });
    }
  );
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
  // if (event.user.toString() !== req.user.id) {
  //   return next(
  //     new ErrorResponse(
  //       `User ${req.user.id} is not authorized to update event`,
  //       401
  //     )
  //   );
  // }

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
      new ErrorResponse(`No event with the id of ${req.params.id}`),
      404
    );
  }

  // if (event.user.toString() !== req.user.id) {
  //   return next(
  //     new ErrorResponse(
  //       `User ${req.user.id} is not authorized to delete event`,
  //       401
  //     )
  //   );
  // }

  await event.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});

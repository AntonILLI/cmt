const asyncHandler = require("../middleware/async");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const path = require("path");
//@route Get/api/v1/auth/users//@accsss Private/Admin

exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

//@route Get/api/v1/auth/users/:id //@accsss Private/Admin

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user
  });
});

//@route POST/api/v1/auth/users/users//@accsss Private

exports.createUser = asyncHandler(async (req, res, next) => {
  //const user = await User.create(req.body);

  console.log(req.files); //file objects... size,encoding,mimetype
  //startswith mimetype -->'image'/jpeg//the file will be accessible from req.files.
  const file = req.files.file;

  // //make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }
  //Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`
      )
    );
  }
  //mv mode directory//ext extention
  //Create custom filename //file name extension original photo._id & original file name
  file.name = `photo_${path.parse(file.name).ext}`;

  //upload path

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }
    const {
      firstname,
      lastname,
      email,
      password,
      description,
      title
    } = req.body;
    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
      description,
      title,
      photo: file.name
    });

    res.status(200).json({
      success: true,
      data: user
    });
  });
});

//@route PUT/api/v1/auth/users/:id //@accsss Private

exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: user
  });
});

//@route DELETE/api/v1/auth/users/:id//@accsss Private/Admin

exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {}
  });
});

//@route PUT/api/v1/users/:id/photo//@accsss Private

exports.userPhotoUpload = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorResponse(`User not found with id of ${req.params.id}`, 404)
    );
  }

  if (user._id.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update file`,
        401
      )
    );
  }

  console.log(req.files); //file objects... size,encoding,mimetype
  //startswith mimetype -->'image'/jpeg//the file will be accessible from req.files.
  const file = req.files.file;

  // //make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }
  //Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`
      )
    );
  }
  //mv mode directory//ext extention
  //Create custom filename //file name extension original photo._id & original file name
  file.name = `photo_${user._id}${path.parse(file.name).ext}`;

  //upload path

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    const user = await User.create(req.params.id, {
      photo: file.name
    });

    res.status(200).json({
      success: true,
      data: user
    });
  });
});

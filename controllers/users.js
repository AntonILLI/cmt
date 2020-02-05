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
  console.log(req.files);
  //startswith mimetype -->'image'/jpeg//the file will be accessible from req.files.

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const photo = req.files.photo;

  if (!photo.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

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

      const {
        firstname,
        lastname,
        email,
        password,
        description,
        price,
        careers
      } = req.body;
      const user = await User.create({
        firstname,
        lastname,
        email,
        password,
        description,
        price,
        careers,
        photo: photo.name
      });

      res.status(200).json({
        success: true,
        data: user
      });
    }
  );
});

//@route PUT/api/v1/auth/users/:id //@accsss Private
//req.params.id-ObjectId//photo..req.files.
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      email: req.body.email,
      description: req.body.description,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      photo: req.files.photo.name,
      password: req.body.password,
      careers: req.body.careers,
      price: req.body.price,
      url: req.body.url
    },
    {
      new: true,
      runValidators: true
    }
  );

  const photo = req.files.photo;
  photo.mv(
    `${__dirname}/${process.env.FILE_UPLOAD_PATH}/${photo.name}`,
    async err => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem with file upload`, 500));
      }
    }
  );
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

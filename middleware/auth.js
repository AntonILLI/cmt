const jwt = require("jsonwebtoken");

const asyncHandler = require("./async");
const ErrorResponse = require("../utils/errorResponse");
<<<<<<< HEAD
const User = require("../models/User");
=======
const User = require("../models/user");
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb

//Protect
exports.protect = asyncHandler(async (req, res, next) => {
  console.log(req.headers);

  const token = req.cookies["token"];

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
});

//const token = req.header("token");
//token = req.cookies.token.split(" ")[1];
// if (
//   req.cookies.token
//   //req.headers.authorization.startsWith("Bearer")
// ) {
//   // Set token from Bearer token in header
//   token = req.cookies.token.split(" ")[1];
//   // Set token from cookie
// }

// exports.authorize = (...roles) => {
//   return (req, res, next) => {
//     console.log(req.body._id);
//     req.user = User.findOne({ _id: req.body.id });

//     if (!roles.includes(req.user.role)) {
//       return next(
//         new ErrorResponse(
//           `User role ${req.user.role} is not authorized to access this route`,
//           403
//         )
//       );
//     }
//     next();
//   };
// };

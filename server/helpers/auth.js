const { User } = require("./../models/user");

let auth = (req, res, next) => {
  let token = req.cookies.w_auth;
  //cookie-parser when access own set cookie ...req.cookies
  User.findByToken(token, (err, user) => {
    if (err) {
      throw err;
    } else if (!user) {
      return res.json({
        isAuth: false,
        error: true
      });
    } else {
      req.token = token;
      req.user = user;
      next();
    }
  });
};

module.exports = { auth };

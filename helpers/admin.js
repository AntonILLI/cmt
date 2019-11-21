let admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.send("you are not allowedto access here");
  }
  next();
};

module.exports = { admin };

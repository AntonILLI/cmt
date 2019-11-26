let admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.send("you are not allowed to access here");
  }
  next();
};

module.exports = { admin };

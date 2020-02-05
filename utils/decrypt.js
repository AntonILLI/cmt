const crypto = require("crypto");

var decrypt = function(text) {
  var algorithm = "aes-256-ctr";
  var password = "gh6ttr";
  var decipher = crypto.createDecipher(algorithm, password);
  var dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
};

module.exports = decrypt;

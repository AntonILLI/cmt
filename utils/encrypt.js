const crypto = require("crypto");

var encrypt = function(text) {
  var algorithm = "aes-256-ctr";
  var password = "gh6ttr";
  var cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(JSON.stringify(text), "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
};

module.exports = encrypt;

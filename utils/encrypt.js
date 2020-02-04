<<<<<<< HEAD
const crypto = require("crypto");

var encrypt = function(text) {
  var algorithm = "aes-256-ctr";
  var password = "gh6ttr";
  var cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(JSON.stringify(text), "utf8", "hex");
=======
const crypto = require("crypto"),
  algorithm = "aes-256-ctr",
  password = "d6F3Efeq";

const encrypt = text => {
  var cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(text, "utf8", "hex");
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
  crypted += cipher.final("hex");
  return crypted;
};

module.exports = encrypt;

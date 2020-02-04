<<<<<<< HEAD
const crypto = require("crypto");

var decrypt = function(text) {
  var algorithm = "aes-256-ctr";
  var password = "gh6ttr";
=======
const crypto = require("crypto"),
  algorithm = "aes-256-ctr",
  password = "d6F3Efeq";

const decrypt = text => {
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
  var decipher = crypto.createDecipher(algorithm, password);
  var dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
};

module.exports = decrypt;

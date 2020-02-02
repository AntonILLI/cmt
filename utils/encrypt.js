const crypto = require("crypto"),
  algorithm = "aes-256-ctr",
  password = "d6F3Efeq";

const encrypt = text => {
  var cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
};

module.exports = encrypt;

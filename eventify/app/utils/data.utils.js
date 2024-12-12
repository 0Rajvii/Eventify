const crypto = require("crypto");
const jwt = require('jsonwebtoken');

const password = "SECRET";

module.exports = {
  encryptString(payload) {
    const crypted = jwt.sign(payload, password);
    return crypted;
  },
  decryptString(payload) {
    return jwt.verify(payload, password, (err, decoded) => {
      return decoded;
    });
  }
};

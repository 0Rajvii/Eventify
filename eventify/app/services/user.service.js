const userModel = require("../models/user.model");
const { encryptString, decryptString } = require('../utils/data.utils')
const userService = {};
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createErrorMessage } = require("../utils/errors.utils");

userService.signup = function (body) {
  return new Promise(async (resolve, reject) => {
    try {
      var passwordHash = bcrypt.hashSync(body.password, 3);
      var user = await userModel.findOne({
        email: body.email,
      });
      if (user) {
        reject({
          errorCode: 400,
          message: "Email address is already registered with us.",
          success: false,
        });
      } else {
        var user = await userModel.create({
          ...body,
          password: passwordHash,
        });
        var token = jwt.sign({ userId: user._id }, "secret");
        user._doc.token = token;
        const verificationToken = encryptString({ userId: user._id });
        console.log('verificationToken', verificationToken);
      }
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

userService.login = function (body) {
  return new Promise(async (resolve, reject) => {
    try {
      var user = await userModel.findOne({
        email: body.email,
      });
      if (!user) {
        reject(
          createErrorMessage({
            message: "Invalid Username/Password Combination",
            errorCode: 400,
            sucess: false,
          })
        );
      } else {
        var passwordValid = await bcrypt.compareSync(
          body.password,
          user.password
        );
        console.log("passwordValid", passwordValid);
        var token = jwt.sign({ userId: user._id }, "secret");
        console.log("token", token);
        if (passwordValid) {
          user._doc.token = token;
          resolve(user);
        } else {
          reject(
            createErrorMessage({
              message: "Invalid Username/Password Combination",
              errorCode: 400,
              sucess: false,
            })
          );
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};

userService.create = function (body) {
  return new Promise(async (resolve, reject) => {
    try {
      var response = await userModel.create(body);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

userService.getAll = function () {
  return new Promise(async (resolve, reject) => {
    try {
      var response = await userModel.find();
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

userService.getSingleUser = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      var response = await userModel.findById(id);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

userService.update = function (id, body) {
  return new Promise(async (resolve, reject) => {
    try {
      var response = await userModel.findByIdAndUpdate(id, body, {
        new: true,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

userService.deleteUser = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      var response = await userModel.findByIdAndDelete(id);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};


module.exports = userService;

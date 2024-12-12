const userService = require("../services/user.service");
const userController = {};
const { sendError } = require('../utils/errors.utils');

userController.signup = async function (req, res, next) {
  var body = req.body;
  try {
    var response = await userService.signup(body);
    res.json({ data: response, success: true });
  } catch (error) {
    console.log(error);
    sendError(res, error);
  }
};


userController.login = async function (req, res, next) {
  var body = req.body;
  try {
    var response = await userService.login(body);
    res.json({ data: response, success: true });
  } catch (error) {
    console.log(error);
    sendError(res, error);
  }
};

userController.updateAccount = async function (req, res, next) {
  const userId = req.userId;
  var body = req.body;
  try {
    var response = await userService.update(userId, body);
    res.json({ data: response, success: true });
  } catch (error) {
    console.log(error);
    sendError(res, error);
  }
};

userController.create = async function (req, res, next) {
  var image = req.file;
  var body = req.body;
  req.body.profileUrl = apiUrl + '/public/' + image.filename;
  try {
    var response = await userService.create(body);
    res.json({ data: response, success: true });
  } catch (error) {
    console.log(error);
    sendError(res, error);
  }
};

userController.update = async function (req, res, next) {
  try {
    var response = await userService.update(id, body);
    res.json({ data: response, success: true });
  } catch (error) {
    console.log(error);
    sendError(res, error);
  }
};

module.exports = userController;




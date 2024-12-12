const feedbackService = require("../services/feedback.service");
const feedbackController = {};
const { sendError } = require('../utils/errors.utils');

feedbackController.create = async function (req, res, next) {
    var body = req.body;
    try {
        var response = await feedbackService.create(body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

feedbackController.getAll = async function (req, res) {
    try {
        var response = await feedbackService.getAll();
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

feedbackController.getSingle = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await feedbackService.getSingle(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

feedbackController.update = async function (req, res, next) {
    var id = req.params.id;
    var body = req.body;

    try {
        var response = await feedbackService.update(id, body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

feedbackController.deleteFeedback = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await feedbackService.deleteFeedback(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

module.exports = feedbackController;




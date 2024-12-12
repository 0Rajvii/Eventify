const eventService = require("../services/event.service");
const eventController = {};
const { sendError } = require('../utils/errors.utils');
var apiUrl = process.env.APP_URL;

eventController.create = async function (req, res, next) {
    var image = req.file;
    var body = req.body;
    req.body.image = apiUrl + '/uploads/' + image.filename;

    try {
        var response = await eventService.create(body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

eventController.update = async function (req, res, next) {
    var image = req.file;
    var id = req.params.id;
    var body = req.body;
    req.body.image = apiUrl + '/public/' + image.filename;
    if (!file) {
        sendError(res, error);
    }
    try {
        var response = await eventService.update(id, body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

eventController.getAll = async function (req, res) {
    try {
        var response = await eventService.getAll();
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

eventController.getUpcomingFeaturedEvents = async function (req, res) {
    try {
        var response = await eventService.getUpcomingFeaturedEvents();
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

eventController.getSingle = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await eventService.getSingle(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};


eventController.deleteEvent = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await eventService.deleteEvent(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

module.exports = eventController;




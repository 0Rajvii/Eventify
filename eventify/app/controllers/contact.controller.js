const contactService = require("../services/contact.service");
const contactController = {};
const { sendError } = require('../utils/errors.utils');

contactController.create = async function (req, res, next) {
    var body = req.body;
    try {
        var response = await contactService.create(body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

contactController.getAll = async function (req, res) {
    try {
        var response = await contactService.getAll();
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

contactController.getSingle = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await contactService.getSingle(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

contactController.update = async function (req, res, next) {
    var id = req.params.id;
    var body = req.body;

    try {
        var response = await contactService.update(id, body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

contactController.deleteContact = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await contactService.deleteContact(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

module.exports = contactController;




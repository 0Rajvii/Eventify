const eventBookingService = require("../services/event-booking.service");
const contactService = require("../services/contact.service");
const eventService = require("../services/event.service");
const feedbackService = require("../services/feedback.service");
const userService = require("../services/user.service");
const adminController = {};
const { sendError } = require('../utils/errors.utils');

adminController.getAll = async function (req, res) {
    try {
        var response = await userService.getAll();
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.getSingleUser = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await userService.getSingleUser(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};


adminController.create = async function (req, res, next) {
    var body = req.body;
    try {
        var response = await userService.create(body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.signup = async function (req, res, next) {
    var body = req.body;
    try {
        var response = await userService.signup(body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};


adminController.login = async function (req, res, next) {
    var body = req.body;
    try {
        var response = await userService.login(body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.update = async function (req, res, next) {
    var id = req.params.id;
    var body = req.body;
    try {
        var response = await userService.update(id, body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.deleteUser = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await userService.deleteUser(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.getAllContacts = async function (req, res) {
    try {
        var response = await contactService.getAll();
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.getAllEventBookings = async function (req, res) {
    try {
        var response = await eventBookingService.getAll();
        console.log('getAllBookings---------', response)
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.getSingleContact = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await contactService.getSingle(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.deleteContact = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await contactService.deleteContact(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.getSingleEventBooking = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await eventBookingService.getSingle(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.deleteEventBooking = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await eventBookingService.deleteBooking(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.getAllFeedback = async function (req, res) {
    try {
        var response = await feedbackService.getAll();
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.getSingleFeedback = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await feedbackService.getSingle(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.deleteFeedback = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await feedbackService.deleteFeedback(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.getAllEvents = async function (req, res) {
    try {
        var response = await eventService.getAll();
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.getSingleEvent = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await eventService.getSingle(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.deleteEvent = async function (req, res, next) {
    var id = req.params.id;
    try {
        var response = await eventService.deleteEvent(id);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.createEvent = async function (req, res, next) {
    var body = req.body;
    try {
        var response = await eventService.create(body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

adminController.updateEvent = async function (req, res, next) {
    var id = req.params.id;
    var body = req.body;
    try {
        var response = await eventService.update(id, body);
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        sendError(res, error);
    }
};

module.exports = adminController;




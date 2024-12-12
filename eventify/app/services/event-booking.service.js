const eventBookingModel = require("../models/event-booking.model");
const eventBookingService = {};

eventBookingService.getAll = function () {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await eventBookingModel.find().populate('eventId', 'eventName').populate('userId', 'name');;
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

eventBookingService.eventBookingData = function (eventId, userId) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await eventBookingModel.findOne({ eventId, userId }).populate('eventId', 'eventName');
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

eventBookingService.getSingle = function (id) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await eventBookingModel.findById(id).populate('eventId', 'eventName');
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

eventBookingService.create = function (body) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await eventBookingModel.create(body);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

eventBookingService.update = function (id, body) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await eventBookingModel.findByIdAndUpdate(id, body, {
                new: true,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

eventBookingService.deleteBooking = function (id) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await eventBookingModel.findByIdAndDelete(id);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = eventBookingService;

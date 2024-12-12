const eventModel = require("../models/event.model");
const eventService = {};

eventService.getAll = function () {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await eventModel.find();
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

eventService.getUpcomingFeaturedEvents = function () {
    return new Promise(async (resolve, reject) => {
        try {
            const currentDate = new Date();
            var response = await eventModel.find({ eventDate: { $gte: currentDate } });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

eventService.getSingle = function (id) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await eventModel.findById(id);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

eventService.create = function (body) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await eventModel.create(body);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

eventService.update = function (id, body) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await eventModel.findByIdAndUpdate(id, body, {
                new: true,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

eventService.deleteEvent = function (id) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await eventModel.findByIdAndDelete(id);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = eventService;

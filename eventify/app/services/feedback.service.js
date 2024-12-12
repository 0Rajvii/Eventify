const feedbackModel = require("../models/feedback.model");
const feedbackService = {};

feedbackService.getAll = function () {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await feedbackModel.find();
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

feedbackService.getSingle = function (id) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await feedbackModel.findById(id);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

feedbackService.create = function (body) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await feedbackModel.create(body);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

feedbackService.update = function (id, body) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await feedbackModel.findByIdAndUpdate(id, body, {
                new: true,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

feedbackService.deleteFeedback = function (id) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await feedbackModel.findByIdAndDelete(id);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = feedbackService;

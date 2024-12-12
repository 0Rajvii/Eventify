const contactModel = require("../models/contact.model");
const contactService = {};

contactService.getAll = function () {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await contactModel.find();
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

contactService.getSingle = function (id) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await contactModel.findById(id);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

contactService.create = function (body) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await contactModel.create(body);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

contactService.update = function (id, body) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await contactModel.findByIdAndUpdate(id, body, {
                new: true,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

contactService.deleteContact = function (id) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await contactModel.findByIdAndDelete(id);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = contactService;

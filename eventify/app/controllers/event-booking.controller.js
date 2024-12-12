const eventBookingService = require("../services/event-booking.service");
const eventBookingController = {};
const { sendError } = require('../utils/errors.utils');

eventBookingController.create = async function (req, res, next) {
    const { eventId, userId } = req.body;
    const body = req.body;

    try {
        const existingEventBooking = await eventBookingService.eventBookingData(eventId, userId);
        if (existingEventBooking) {
            return sendError(res, 'Event already booked by this user');
        }
        const response = await eventBookingService.create({
            userId,
            eventId,
            ...body
        });
        res.json({ data: response, success: true });
    } catch (error) {
        console.log(error);
        return sendError(res, 'Failed to create booking');
    }
};

module.exports = eventBookingController;




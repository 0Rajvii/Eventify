var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventBookingSchema = Schema(
    {
        eventId: {
            type: Schema.Types.ObjectId,
            ref: 'Event',
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        bookingDate: {
            type: Date,
            default: Date.now
        },

    }, { timestamps: true });

var Booking = mongoose.model("EventBooking", eventBookingSchema);

module.exports = Booking;

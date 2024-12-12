var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = Schema(
    {
        eventName: {
            type: String,
        },
        eventDescription: {
            type: String,
        },
        eventDate: {
            type: Date,
        },
        eventLocation: {
            type: String,
        },
        image: {
            type: String,
        },
        category: {
            type: String,
            enum: ['music', 'sports', 'arts', 'education', 'business'],
        },
    }, { timestamps: true });

var Event = mongoose.model("Event", eventSchema);

module.exports = Event;

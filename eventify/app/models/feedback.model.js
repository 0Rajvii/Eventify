var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var feedbackSchema = Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        message: {
            type: String,
        },
        feedbackType: {
            type: String,
            enum: ['positive', 'negative', 'neutral'],
            default: 'positive',
        },
    }, { timestamps: true });

var Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var contactSchema = Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        message: {
            type: String,
        },
    }, { timestamps: true });

var Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

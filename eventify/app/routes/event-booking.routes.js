const router = require("express").Router();
const eventBookingController = require("../controllers/event-booking.controller");

router.post("/", eventBookingController.create);

module.exports = router;


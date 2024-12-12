const router = require("express").Router();
const eventController = require("../controllers/event.controller");
const load = require('../services/data-upload.service');
var upload = load;

router.post("/", upload.single('file'), eventController.create);
router.get("/", eventController.getAll);
router.get("/:id", eventController.getSingle);
router.put("/:id", upload.single('file'), eventController.update);
router.delete("/:id", eventController.deleteEvent);
router.get("/upcoming/featured", eventController.getUpcomingFeaturedEvents);

module.exports = router;


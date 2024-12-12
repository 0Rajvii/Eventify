const router = require("express").Router();
const feedbackController = require("../controllers/feedback.controller");

router.post("/", feedbackController.create);
router.get("/", feedbackController.getAll);
router.get("/:id", feedbackController.getSingle);
router.put("/:id", feedbackController.update);
router.delete("/:id", feedbackController.deleteFeedback);

module.exports = router;


const router = require("express").Router();
const contactController = require("../controllers/contact.controller");

router.post("/", contactController.create);
router.get("/", contactController.getAll);
router.get("/:id", contactController.getSingle);
router.put("/:id", contactController.update);
router.delete("/:id", contactController.deleteContact);

module.exports = router;


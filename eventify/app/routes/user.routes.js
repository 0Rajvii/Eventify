const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { loginMiddleware } = require("../middlewares/sessionManager");
const load = require('../services/data-upload.service');
var upload = load;

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.put("/update-account", loginMiddleware, userController.updateAccount);
router.post("/", upload.single('file'), userController.create);
router.put("/:id", userController.update);

module.exports = router;

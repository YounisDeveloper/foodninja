const express = require("express");
const router = express.Router();
const user_controller = require("./user_controller");
router.post("/signUp", user_controller.createUser);
router.post("/login", user_controller.loginUser);
module.exports = router;

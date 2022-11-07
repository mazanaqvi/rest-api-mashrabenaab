const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/send-data", userController.getUser);

module.exports = router;

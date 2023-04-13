const Controller = require("../controllers/controller")
const authen = require("../middlewares/authen");
const errors = require("../middlewares/errors")
const express = require("express");
const router = express.Router();

router.post("/register", Controller.register)
router.post("/login", Controller.login);

module.exports = router
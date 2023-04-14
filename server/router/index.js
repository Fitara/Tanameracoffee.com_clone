const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller")
const category = require("./category")
const product = require("./product")
const errors = require("../middlewares/errors")

router.post("/register", Controller.register)
router.post("/login", Controller.login);

router.use(product)
router.use(category)

router.use(errors)

module.exports = router
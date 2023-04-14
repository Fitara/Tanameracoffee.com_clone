const express = require("express");
const router = express.Router();
// const Controller = require("../controllers/controllers");
const authen = require("../middlewares/authen");

// router.get("/categories", Controller.categories);

router.use(authen);

// router.post("/categories", Controller.postCategories);
// router.patch("/categories/:id", Controller.patchCategories);
// router.delete("/categories/:id", Controller.deleteCategories);

module.exports = router;
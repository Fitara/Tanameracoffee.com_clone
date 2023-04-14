const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
const authen = require("../middlewares/authen");

router.get("/", Controller.products);
router.get("/:productId", Controller.detail);

router.use(authen);
router.post("/products", Controller.postProduct);
// router.put("/product/:id", Controller.replaceProduct);
router.delete("/product/:id", Controller.deleteProduct);

module.exports = router;

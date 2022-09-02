const express = require("express");
const router = express.Router();
const {all,getPro} = require("../controller/products_controller");
router.get("/all-products",all);
router.get("/all-products/:id",getPro);
module.exports = router;
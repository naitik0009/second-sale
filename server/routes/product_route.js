import express from "express";
const router = express.Router();
import {all,getPro} from "../controller/products_controller.js";
router.get("/all-products",all);
router.get("/all-products/:id",getPro);
export default router;
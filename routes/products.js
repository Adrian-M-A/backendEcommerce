import express from "express";
import ProductController from "../controllers/ProductController.js";

const router = express.Router();

router.post("/create", ProductController.create);
router.get("/all", ProductController.getProducts);
router.put("/update/:name", ProductController.updateProduct);
router.delete("/delete/:name", ProductController.delete);

export default router;
import express from "express";
import OrderController from "../controllers/OrderController.js"

const router = express.Router();

router.post("/create", OrderController.create);
router.get("/all", OrderController.allOrders);
router.get("/selected", OrderController.selectedOrder);
router.put("/update", OrderController.updateOrder);
router.delete("/delete", OrderController.delete);

export default router;

const express = require("express");
const OrderController = require("../controllers/OrderController.js");
const auth = require("../middleware/auth.js");

const router = express.Router();

router.post("/", auth, OrderController.create);
router.get("/", OrderController.allOrders);
router.get("/:id", OrderController.selectedOrder);
router.put("/:id", OrderController.updateOrder);
router.delete("/:id", OrderController.delete);

module.exports = router;

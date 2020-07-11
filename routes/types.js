import express from "express";
import TypeController from "../controllers/TypeController.js";

const router = express.Router();

router.post("/create", TypeController.createType);
router.get("/all", TypeController.allTypes);
router.get("/selected/:type", TypeController.oneType);
router.put("/update/:type", TypeController.updateType);
router.delete("/delete/:type", TypeController.deleteType);


export default router;
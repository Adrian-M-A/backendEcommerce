import express from "express";
import AllergenController from "../controllers/AllergenController.js";

const router = express.Router();

router.post("/create", AllergenController.createAllergen);
router.get("/all", AllergenController.allAllergens);
router.get("/selected/:allergen", AllergenController.oneAllergen);
router.put("/update/:allergen", AllergenController.updateAllergen);
router.delete("/delete/:allergen", AllergenController.deleteAllergen);

export default router;
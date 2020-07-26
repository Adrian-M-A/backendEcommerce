const express = require ("express");
const AllergenController = require ("../controllers/AllergenController.js");

const router = express.Router();

router.post("/", AllergenController.createAllergen);
router.get("/", AllergenController.allAllergens);
router.get("/:id", AllergenController.oneAllergen);
router.put("/:id", AllergenController.updateAllergen);
router.delete("/:id", AllergenController.deleteAllergen);

module.exports = router;
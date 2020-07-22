const express = require ("express");
const ProductController = require ("../controllers/ProductController.js");

const router = express.Router();

router.post("/", ProductController.create);
router.get("/", ProductController.getProducts);
router.get("/asc", ProductController.productsAsc);
router.get("/desc", ProductController.productsDesc);
router.get("/selected/:id", ProductController.selectedProducts);
router.get("/selected", ProductController.searchByName);
router.get("/search/:tag", ProductController.searchByTag);
router.get("/type/:id", ProductController.type);
router.get("/glutenfree", ProductController.glutenFree);
router.get("/vegetarian", ProductController.vegan)
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.delete);

module.exports = router;
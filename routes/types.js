const express = require("express");
const TypeController= require ("../controllers/TypeController.js");

const router = express.Router();

router.post("/", TypeController.createType);
router.get("/", TypeController.allTypes);
router.get("/:id", TypeController.oneType);
router.put("/:id", TypeController.updateType);
router.delete("/:id", TypeController.deleteType);


module.exports = router;
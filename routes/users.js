const express = require("express");
const UserController = require("../controllers/UserController.js");
const auth = require("../middleware/auth.js");
const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/logout", auth, UserController.logout);


module.exports = router;
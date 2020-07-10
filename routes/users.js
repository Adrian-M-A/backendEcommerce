import express from "express";
import UserController from "../controllers/UserController.js";
import { auth } from "../middleware/auth.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);


export default router;
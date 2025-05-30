import express from "express";
import { createUser } from "../controller/user.controller.mjs";
import { loginUser } from "../controller/auth.controller.mjs";

const router = express.Router()

router.post("/api/register", createUser)
router.post("/api/login", loginUser)

export default router;
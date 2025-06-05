import express from "express";
import { createUser } from "../controller/user.controller.mjs";
import { loginUser, reNewToken } from "../controller/auth.controller.mjs";
import { authUser } from "../middlewares/auth-user.middleware.mjs";

const router = express.Router()

router.post("/api/register", createUser)
router.post("/api/login", loginUser)
router.get("/api/auth/new-Token", authUser, reNewToken)


export default router;
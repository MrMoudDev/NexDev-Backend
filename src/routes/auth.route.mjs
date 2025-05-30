import express from "express";
import { createUser } from "../controller/user.controller.mjs";

const router = express.Router()

router.post("/api/register", createUser)

export default router;
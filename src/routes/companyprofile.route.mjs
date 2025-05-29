import express from "express";
import { createCompanyProfile } from "../controller/companyprofile.controller.mjs";

const router = express.Router()

// Define las rutas para la entidad companyprofile

router.post("/api/companyprofile", createCompanyProfile)

export default router;
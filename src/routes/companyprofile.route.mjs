import express from "express";
import { createCompanyProfile, deleteUserById, getAllCompany, getCompanyById, updateCompanyById } from "../controller/companyprofile.controller.mjs";

const router = express.Router()

// Define las rutas para la entidad companyprofile

router.post("/api/companyprofile", createCompanyProfile)
router.get("/api/companyprofile", getAllCompany)
router.get("/api/companyprofile/:id", getCompanyById )
router.delete("/api/companyprofile/:id",deleteUserById)
router.patch("/api/companyprofile/:id",updateCompanyById)

export default router;
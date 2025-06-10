import express from "express";
import { createCompanyProfile, deleteUserById, getAllCompany, getCompanyById, updateCompanyById } from "../controller/companyprofile.controller.mjs";
import { authUser } from "../middlewares/auth-user.middleware.mjs";

const router = express.Router()

// Define las rutas para la entidad companyprofile

router.post("/api/companyprofile", authUser,createCompanyProfile)
router.get("/api/companyprofile", getAllCompany)
router.get("/api/companyprofile/:id", getCompanyById )
router.delete("/api/companyprofile/:id", authUser,deleteUserById)
router.patch("/api/companyprofile/:id" ,authUser,updateCompanyById)

export default router;
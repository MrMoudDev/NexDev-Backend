import express from 'express';
import {createDeveloperProfile, deletDeveloperById, getAllDeveloperProfile, getAllDeveloperProfileId} from '../controller/developerProfile.controller.mjs';
import developerProfileModel from '../schemas/developerProfile_schemas.mjs';
import { updateCompanyById } from '../controller/companyprofile.controller.mjs';
import { authUser } from '../middlewares/auth-user.middleware.mjs';

const router = express.Router();

// Define las rutas para la entidad empresas
router.post('/api/developerProfile', authUser,createDeveloperProfile)
router.get("/api/developerProfile" ,getAllDeveloperProfile)
router.get("/api/developerProfile/:id",getAllDeveloperProfileId)
router.delete("/api/developerProfile/:id", authUser,deletDeveloperById)
router.patch("/api/developerProfile/:id", authUser,updateCompanyById)



export default router;
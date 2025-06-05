import express from 'express';
import { createdeveloperProfile } from '../controller/developerProfile.controller.mjs';

const router = express.Router();

// Define las rutas para la entidad empresas
router.post( '/api/developerProfile', createdeveloperProfile )



export default router;
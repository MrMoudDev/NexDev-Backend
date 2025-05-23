import express from "express";
import { createUser } from "../controller/user.controller.mjs";

const router = express.Router()   //invocando el router de express

// Definir las rutas para la entidad de user.

router.post( "/api/user", createUser)



// Exponer el router de este archivo para ser usado por otros en la aplicacion 

export default router;
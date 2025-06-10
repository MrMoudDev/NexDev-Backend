import express from "express";
import { createUser, getAllUser, getUserById, removeUserById, updateUserById } from "../controller/user.controller.mjs";
import { authUser } from "../middlewares/auth-user.middleware.mjs";

const router = express.Router()   //invocando el router de express

// Definir las rutas para la entidad de user.

router.post( "/api/user", authUser,createUser)
router.get("/api/user", authUser,getAllUser)
router.get("/api/user/:id", authUser,getUserById)           //id: (Parametrizar la ruta: Creamos una especie de variables)
router.delete("/api/user/:id", authUser,removeUserById)
router.patch("/api/user/:id", authUser,updateUserById)                           // Actualizacion total o pacial
// Exponer el router de este archivo para ser usado por otros en la aplicacion 

export default router;
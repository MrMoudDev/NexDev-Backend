import express from "express";
import { createUser, getAllUser, getUserById, removeUserById, updateUserById } from "../controller/user.controller.mjs";

const router = express.Router()   //invocando el router de express

// Definir las rutas para la entidad de user.

router.post( "/api/user", createUser)
router.get("/api/user", getAllUser)
router.get("/api/user/:id",getUserById)           //id: (Parametrizar la ruta: Creamos una especie de variables)
router.delete("/api/user/:id",removeUserById)
router.patch("/api/user/:id", updateUserById)                           // Actualizacion total o pacial
// Exponer el router de este archivo para ser usado por otros en la aplicacion 

export default router;
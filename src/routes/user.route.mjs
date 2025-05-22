import { Router } from "express";   // Importando el router de express
import { createUser } from "../controller/user.controller.mjs";


const router = Router()             // Invocando Router (preparandolo para definir rutas)


// Define las rutas de acceso 

router.post("/api/users", createUser );



export default router;       // Exportando 
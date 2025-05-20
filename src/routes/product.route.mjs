// file routes: Definir los endpoints de una entidad 

import { Router } from "express";   // Importando el router de express
const router = Router()             // Invocando Router (preparandolo para definir rutas)


// Define las rutas de acceso 

router.get( "/api/products", (req, res) => {
    res.send("obtiene todos los productos")
})

router.post("/api/products", (req, res) => {
    res.send("Crear un productos")
})

router.patch("/api/products", (req, res) => {
    res.send("Actualizacion parcial de un producto")
})

router.put("/api/products", (req, res) => {
    res.send("Actualizacion total de un producto")
})

router.delete("/api/products", (req, res) =>{
    res.send("Elimina un priducto")
})


export default router;// Exportando todas las rutas de estas entidades para ser usadas en cualquier parte de las aplicaciones
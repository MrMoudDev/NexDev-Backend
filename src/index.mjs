// ------>  Paso1: Importamos dependencias (Librerias, paquetes)
// const express = require('express')                    // CommonJS
import express from 'express';  // ESModule
import product from './routes/product.route.mjs';

// ------>  Paso2: Ejecutamos Express
const app = express();   // Invocacion o ejecucion de express

// ------>  Paso3: Crear los EndPoints (Puntos de acceso)
app.use(product);

// ------>  Paso4: Lanzamos el servidor Web usando express escuchando en el puerto 3000
//                 https://localhost:<port>
app.listen( 3000, () => {
    console.log( 'Servidor corriendo en http://localhost:3000))' )
} );


// ------>  Paso1: Importamos dependencias (Librerias, paquetes)
// const express = require('express')                    // CommonJS
import express from 'express';  // ESModule

import user from "./routes/user.route.mjs";

import dbConnect from './config/mongo.config.mjs';

import auth from "./routes/auth.route.mjs";

import developerProfile from "./routes/developerProfile.routes.mjs";

// ------>  Paso2: Ejecutamos Express
const app = express();   // Invocacion o ejecucion de express

const PORT = process.env.PORT ?? 3000

dbConnect();
// ------>  Paso3: Crear los EndPoints (Puntos de acceso)

app.use(express.json())    //Habilita el iterprete de objetos json

app.use(user)  // Implementando las rutas de user


app.use( developerProfile)
app.use( auth )

// ------>  Paso4: Lanzamos el servidor Web usando express escuchando en el puerto 3000
//                 https://localhost:<port>
app.listen( PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`)
} );


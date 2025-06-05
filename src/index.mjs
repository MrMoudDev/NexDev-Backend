// ------>  Paso1: Importamos dependencias (Librerias, paquetes)
// const express = require('express')                    // CommonJS
import express from 'express';  // ESModule

import companyprofile from "./routes/companyprofile.route.mjs";

import user from "./routes/user.route.mjs";

import dbConnect from './config/mongo.config.mjs';

import auth from "./routes/auth.route.mjs";

// ------>  Paso2: Ejecutamos Express
const app = express();   // Invocacion o ejecucion de express

dbConnect();
// ------>  Paso3: Crear los EndPoints (Puntos de acceso)

app.use(express.json())    //Habilita el iterprete de objetos json

app.use(user)  // Implementando las rutas de user

app.use(companyprofile);

app.use( auth )

// ------>  Paso4: Lanzamos el servidor Web usando express escuchando en el puerto 3000
//                 https://localhost:<port>
app.listen( 3000, () => {
    console.log( 'Servidor corriendo en http://localhost:3000))' )
} );


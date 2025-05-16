// ------>  Paso1: Importamos dependencias (Librerias, paquetes)
// const express = require('express')                    // CommonJS
import express from 'express';  // ESModule

// ------>  Paso2: Ejecutamos Express
const app = express();   // Invocacion o ejecucion de express

// ------>  Paso3: Lanzamos el servidor Web usando express escuchando en el puerto 3000
app.listen( 3000, () => {
    console.log( 'Servidor lanzado exitosamente :))' )
} );
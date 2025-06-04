// Define la estructura del documento que se va a registrar
import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "El nombre del usuario es obligatorio"],    // Obligatorio
    },

    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "El correo del usuario es obligatorio"]
    },

    passwort:{
        type:String,
        trim:true,
        min:[6, "La contraseña debe tener al menos 6 caracteres"],
        max: [12, "La contraseña debe tener maximo 12 caracteres"],
        required: [true, "La contraseña es obligatoria"]
    },

    role:{
        type:String,
        enum: ["admin","especialista","paciente"],
        default: "paciente"
    },

},{
    timestamps:true,    // Crea dos campos "createdAD" , "UpdatedAT"
    versionKey:false    // Contador de las versiones del documento
});

// Definir el modelo

const userModel = mongoose.model(
    "users",                           // Define el nombre de la coleccion donde se guardara los documentos 
    userShema
);


// Exponemos el modelo al resto de la aplicacion 
export default userModel;
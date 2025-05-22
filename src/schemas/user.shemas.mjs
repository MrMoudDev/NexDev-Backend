import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del usuario es obligatorio.'],
        trim: true // Asegura que los espacios en blanco al inicio/final sean eliminados
    },
    username: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio.'],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'El correo electrónico es obligatorio.'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, introduce un correo electrónico válido.']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria.'],
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres.'],
    },
    role: {
        type: String,
        required: [true, 'El rol del usuario es obligatorio.'],
        enum: {
            values: ['administrador', 'colaborador', 'registrado'],
            message: 'El rol {VALUE} no es válido. Los roles permitidos son: administrador, colaborador, registrado.'
        },
        default: 'registrado' // Cambiado a 'registrado' para mayor coherencia con los roles definidos
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
    versionKey: false
}, {
    timestamps: true, // Agrega las propiedades createdAt
    versionKey: false // contador __v de modificaciones del schema
});

const userModel = mongoose.model(
    'users',
    userSchema
);

export default userModel;
import mongoose from 'mongoose';

// Define la estructura de datos del documento

const developerProfileSchema = new mongoose.Schema({
        userId: String,
        bio: String,
        skills: [String],
        experience: String,
        github: String,
        linkedin: String,
        availability: Boolean,
        portfolio: [String]
        }, {
            timestamps: true,
            versionKey: false
        });


// Define el modelo y vincula la estructura de datos a una colección

const developerProfileModel = mongoose.model(
    'developerProfile', // Nombre de la colección
    developerProfileSchema // Nombre de la estructura de datos
);

// Exponemos el modelo para que sea usado por cualquier archivo de la aplicación
export default developerProfileModel;
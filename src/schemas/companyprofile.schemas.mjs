import mongoose from "mongoose";

// Define la estructura de datos del documento

const companyprofileShema = new mongoose.Schema({

    companyName: {
        type: String,
        require: [true, "El nombre de la empresa es obligatoria"],
        unique: true
    },
    
    description: {
        type: String,
        require: [true, "La descipcion es obligatoria"]
    },
    website:{
        type: String,
        require:[true, "Pagina de la empresa es obligatorio"],
        unique: true
    },
    size: {
        type: String,
        enum: ["startup", "pyme", "corporación"]
    },
} , {
    timestamps: true,
    versionKey: false
});

// Define el modelo y vincula la estructura de datos a una coleccion 
const companyprofileModel = mongoose.model(
    "companyprofile",            //Nombre de la coleccion 
    companyprofileShema          //Nombre de la estructura de datos
)

export default companyprofileModel
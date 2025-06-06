import mongoose from "mongoose"

const DB_URI = process.env.DB_URI ?? "mongodb://127.0.0.1:27017/db_NexDev"

async function dbConnect() {
    try {
        await mongoose.connect( DB_URI,{})

        console.log("Base de datos conectada exitosamente");

    } catch (error) {
        console.error(error)
        console.error("Error al conectarse a la base de datoss")
    }
};


export default dbConnect;
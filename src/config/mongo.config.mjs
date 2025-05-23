import mongoose from "mongoose"

async function dbConnect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/db_NexDev",{})

        console.log("Base de datos conectada exitosamente");

    } catch (error) {
        console.error(error)
        console.error("Error al conectarse a la base de datoss")
    }
};


export default dbConnect;
import bcrypt from "bcrypt";

import userModel from "../schemas/user.shema.mjs";

const createUser = async (req, res) => {
    const inputData = req.body; //
    
            // try: Controla las excepciones de la consulta a la basse de datos 

    try {

// Paso 1: Verificar si el usuario existe
        const userFound = await userModel.findOne({ 
            username: inputData.username,
            email: inputData.email
        });

        if( userFound ) {
            return res.status( 404 ).json({ msg: 'No pudo registrarse por que, el usuario ya existe.' });
        }//  Enviando la respuesta al cliente 
        
        const salt = bcrypt.genSaltSync()
        console.log("salt: ", salt);

        const hashPasswort = bcrypt.hashSync(
            inputData.passwort,
            salt
        );
        console.log("hashPassword:", hashPasswort);

        inputData.passwort = hashPasswort;

                // Paso 3: Registrar el usuario
        const data = await userModel.create( inputData );

        // Paso 4: Responder al cliente que se registro existosamente
        res.status( 201 ).json( data );

    } catch (error) {           // Catch: captuta el error producido por la excepcion 
        console.error(error);
        res.status(500).json({msg: "Error: No se puede registrar el producto"})
    }


}

const getAllUser = async (req, res) => {
    
    try {
        const data = await userModel.find({});
        res.json(data);
    } catch (error) {
        console.error(error)
        res.json({msg: "Error; No se pudo obtener el listado de user "})
    }
}

const getUserById = async (req, res) => {
    const userId = req.params.id;      // El nombre final dependera del parametro de la ruta

    try {
        //const data = await userModel.findById( userId );
        const data = await userModel.findOne({ _id: userId})
        
        if( ! data){
            return res.json({msg : " El usuario no se encuentra registrado"})
        }

        res.json( data ); 
    } catch (error) {
        console.error(error)
        res.json({msg: "Erros: no se pudo encontrar el usuario"})
    }
}

const removeUserById = async (req, res) =>{
    const userId= req.params.id;
    
    try {
         const data = await userModel.findByIdAndDelete(userId)              //userModel.findOneAndDelete({_id: userId})
    
    if( ! data){
        return res.json({msg : " El usuario no se encuentra registrado"})
    }
    
    res.json(data)
    } 
    catch (error) {
        console.error(error)
        res.json({msg: "Error: No pudo eliminar el usuario"})
    }
}

const updateUserById = async (req, res) => {
    const userId = req.params.id;
    const inputData = req.body;
    
    try {
        const data = await userModel.findByIdAndUpdate(userId, inputData, {new: true});
    //const data =  userModel.findOneAndUpdate({_id: userId})
    res.json( data );
    } 
    catch (error) {
        console.error(error),
        res.json({msg: "Error: No se pudo actualizar el producto"})
    }
} 

export {
    createUser,
    getAllUser,
    getUserById,
    removeUserById,
    updateUserById
}
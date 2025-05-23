import userModel from "../schemas/user.shema.mjs";

const createUser = async (req, res) => {
    const inputData = req.body; //
    
            // try: Controla las excepciones de la consulta a la basse de datos 

    try {
        const registerUser = await userModel.create(inputData);

        console.log(registerUser)     //  Imprime en la consula 
        res.status(201).json(registerUser)        //  Enviando la respuesta al cliente 
        
    } catch (error) {           // Catch: captuta el error producido por la excepcion 
        console.error(error);
        res.estatus(500).json({msg: "Error: No se puede registrar el producto"})
    }


}

export {
    createUser
}
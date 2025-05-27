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


export {
    createUser,
    getAllUser,
    getUserById
}
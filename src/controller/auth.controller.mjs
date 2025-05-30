import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

import userModel from "../schemas/user.shema.mjs";

const loginUser = async (req, res) => {
    // Paso1: Obtener los datos del body que nos ingrese el usuario 
    const inputData = req.body
    // Paso2: Verificar si el usuario existe  (Por favor registrese)
    const userFound = await userModel.findOne({email: inputData.email})

    if(! userFound){
        return res.json({msg: "El usuario no existe. Por favor registrese"})
    }
    // Paso3: Verificar la contraseña (si coincide)
    const isAuthenticate = bcrypt.compareSync(
        inputData.passwort,          //password original
        userFound.passwort           //Hash password
    )

    if(! isAuthenticate){
        return res.json({msg: "Contraseña invalida"})
    }
    // Paso4: Generar credencial digital (Token)
    const payload = {
        name: userFound.name,
        email: userFound.email,
        role: userFound.role
    }
    const JWT_secret = "2mni493idubodhandjao"
    
    const token = jwt.sign( 
        payload,             // Carga util
        JWT_secret,          // Palabra semilla secreta
        {expiresIn: "1h"}    //Opciones y coniguraciones del token 
    )

    //Paso5: Eliminar algunas propiedades que traen datos sensibles
    const objsUser = userFound.toObject()    //convertir un bjson a un objeto javascript 

    delete objsUser.passwort,
    delete objsUser.createdAt
    delete objsUser.updatedAt
    //Paso6: Respuesta al cliente 
    res.json({
        token,
        user: objsUser
    })
};

export{
    loginUser
}
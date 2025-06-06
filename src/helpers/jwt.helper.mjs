import jwt from "jsonwebtoken";
        
const generateToken = (payload) => {
    const token = jwt.sign( 
        payload,             // Carga util
        process.env.JWT_secret,          // Palabra semilla secreta
        {expiresIn: "1h"}    //Opciones y coniguraciones del token 
    )

    return token;
}

const verifyToken = ( token ) => {
    const payload = jwt.verify(
        token,  // token valido
        process.env.JWT_secret
    )    // Palabra semilla secreta 

    return payload
}

export{
    generateToken,
    verifyToken
}
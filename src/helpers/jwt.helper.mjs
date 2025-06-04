import jwt from "jsonwebtoken";

const JWT_secret = "njndjsbdkamdnkansnia"          

const generateToken = (payload) => {
    const token = jwt.sign( 
        payload,             // Carga util
        JWT_secret,          // Palabra semilla secreta
        {expiresIn: "1h"}    //Opciones y coniguraciones del token 
    )

    return token;
}

const verifyToken = ( token ) => {
    const payload = jwt.verify(
        token,  // token valido
        JWT_secret)    // Palabra semilla secreta 

    return payload
}

export{
    generateToken,
    verifyToken
}
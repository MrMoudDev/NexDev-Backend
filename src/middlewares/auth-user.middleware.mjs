import { verifyToken } from "../helpers/jwt.helper.mjs";


const authUser = (req, res, next) => {
    const token = req.header("x-token")   //Extraemos el token de la cabecera


    //Verifica que el token no venga vacio
    if(! token ){
        return res.json({msg: "Error: al obtener el token"})
    }


    const payload = verifyToken( token )

    //Eliminamos propiedades adicionales
    delete payload.iat;
    delete payload.exp

    console.log({ payload })
    

    //Crear una propiedad en el objeto request de express y guardarlo en el paylod
    req.authUser = payload

    next()
}

export{
    authUser
}
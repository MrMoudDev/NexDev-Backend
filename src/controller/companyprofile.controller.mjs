import companyprofileModel from "../schemas/companyprofile.schemas.mjs"

const createCompanyProfile = async (req, res) => {
    const inputData = req.body;
    
    try {
        //Paso1:Verificar si el usuario existe

        const companyFound = await companyprofileModel.findOne({
            companyName: inputData.companyName,
            website: inputData. website
        })

        if(companyFound){
            return res.status( 404 ).json({msg: "La empresa y web ya estan registradas"})
        }

        //Paso2:Registrar el usuario
        const data = await companyprofileModel.create( inputData );
        
        //Paso3:
        res.status( 201 ).json( data );
    } 
    catch (error) {
        res.status( 500 ).json({msg: "Eror: No se puede crear la empresa "})
        console.error( error );
    }
}



// Exponer cada funcionalidad definida en este archivo
export{
    createCompanyProfile
}
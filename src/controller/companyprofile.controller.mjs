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

const getAllCompany = async (req, res) => {
    
    try {
        const data = await companyprofileModel.find({});
        res.status( 200 ).json( data );
    } 
    catch (error) {
        console.error( error );
        res.status ( 500 ).json({msg: "Error: No se puede obtener la lista de company"});
    }
}

const getCompanyById = async (req,res) => {
    const companyId = req.params.id

try {
    const data = await companyprofileModel.findById(companyId) 
    
    if(!data){
        return res.json({msg: "Company no encontrada "})    //data == nul equivale igualmente a esto !data
    }
    
    res.json( data )
} 
catch (error) {
    console.error( error )
    res.status(500).json({msg: "Error no pudo obtener la empresa por id"})
}
}

const  deleteUserById = async(req, res) => {
    const companyId = req.params.id

    try {
        const data = await companyprofileModel.findByIdAndDelete( companyId )
        
            if( ! data){
        return res.json({msg : " El usuario no se encuentra registrado"})
    }

        res.json( data )
    } 
    catch (error) {
        console.error( error )
        res.status(400).json({msg: "No se pudo eliminar la empresa"})
    }

}

const updateCompanyById = async (req, res) => {
    const companyId = req.params.id;
    const inputData = req.body;

    try {
        const companyFound = await companyprofileModel.findOne({
        companyName: inputData.companyName,
        website: inputData. website
        })

        if( companyFound ){
            return res.status( 404 ).json({msg: "El usuario que deseas actualizar no existe"})
        }


        const data = await companyprofileModel.findByIdAndUpdate( companyId,inputData, {new: true} )

        res.json( data )
    } 
    catch (error) {
        console.error( error )
        res.status( 500 ).json({msg: "Error no pudo actualizar el usuario"})
    }
}


// Exponer cada funcionalidad definida en este archivo
export{
    createCompanyProfile,
    getAllCompany,
    getCompanyById,
    deleteUserById,
    updateCompanyById
}
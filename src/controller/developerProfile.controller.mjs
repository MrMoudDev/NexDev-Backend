import developerProfileModel from "../schemas/developerProfile_schemas.mjs"

const createDeveloperProfile =  async ( req, res ) => {
    const inputdata = req.body;

    try {
        const developerProfileFound = await developerProfileModel.findOne({
            github: inputdata.github
        })
        if(developerProfileFound){
            return res.status(401).json({msg: "Cuesta ya creada"})
        }

        const data = await developerProfileModel.create( inputdata )
        
        res.status(201).json( data )
    } 
    catch (error) {
        res.status( 500 ).json({msg: "Eror: No se puede crear el perfil "})
        console.error( error );
    }
}

const getAllDeveloperProfile = async (req, res) => {
    try {
        const data = await developerProfileModel.find({})
        res.status( 201 ).json( data )
    } 
    catch (error) {
        console.error(error)
        res.status ( 500 ).json({msg: "Error: No se puede obtener el usuario de la lista"});
    }
}

const getAllDeveloperProfileId = async (req, res) => {
    const developerId = req.params.id

    try {
        const data = await developerProfileModel.findById( developerId )

        if( !data){
            return res.json({msg: "Developer no encontrada "})  
        }

        res.json( data )
    } 
    catch (error) {
        console.error( error )
        res.status(500).json({msg: "Error no pudo obtener el developer por id"})
    }
}

const deletDeveloperById = async (req, res) => {
    const developerId = req.params.id

    try {
        const data = await developerProfileModel.findOneAndDelete( developerId )
        if(!data){
            return res.json({msg : " El usuario no se encuentra registrado"})
        }

        res.json( data )
    } 
    catch (error) {
        console.error( error )
        res.status(400).json({msg: "No se pudo eliminar la empresa"})
    }
}

const updateDeveloperById = async (req, res) => {
    const developerId = req.params.id
    const inputdata = req.body

    try {
        const developerFound = await developerProfileModel.findOne({
            github: inputdata.github
        })
        if(developerFound){
            return res.status( 404 ).json({msg: "El usuario que deseas actualizar no existe"})
        }

        const data = await developerProfileModel.findOneAndUpdate( developerId, inputdata, { new: true})

        res.json( data )
    } 
    catch (error) {
        console.error( error )
        res.status( 500 ).json({msg: "Error no pudo actualizar el usuario"})
    }
}






export {
    createDeveloperProfile,
    getAllDeveloperProfile,
    getAllDeveloperProfileId,
    deletDeveloperById,
    updateDeveloperById
}
import DeveloperProfileModel from "../schemas/DeveloperProfile_schemas"

const createDeveloperProfile =  async ( req, res ) => {
    const inputData = Req.body;

    const data = await DeveloperProfileModel.create ( inputData );
    res.status( 201 ).json(data);
}



export {
    createDeveloperProfile
}
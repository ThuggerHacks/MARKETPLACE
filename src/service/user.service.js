import { clientData, purchaseData, productData } from '../model/model';


const deletePurchase = (_id) => {
    purchaseData.deleteMany({clientId:_id}).then(resp => {
        console.log("all his purcahses where deleted");
    }).catch(error => {
        console.log("IMpossible to delete his purchases");
    })
}

const deleteProduct = (_id) => {
    productData.deleteMany({clientId:_id}).then(resp => {
        console.log("all his purcahses where deleted");
    }).catch(error => {
        console.log("IMpossible to delete his purchases");
    })
}

/*CLIENT ACTIONS*/
const createClient = async(req,res) => {

    const { firstName, lastName, email, password } = req.body;

    try{
        const client = new clientData({ firstName, lastName, email, password});
        const saveClient = await client.save();
        return res.json(saveClient);
    }catch(error){
        
        return res.json(error);
    }
}

const readClient = async(_,res) => {

    try{
        const getClient = await clientData.find();
        return res.json(getClient);
    }catch(error){
        console.log(error);
    }
}

const updateClient = async(req,res) => {
    const { _id } = req.params;
    const { firstName, lastName, email, password } = req.body;

    try{
        const updateClientData = await clientData.updateOne( { _id }, { firstName, lastName, email, password } );
        return res.json(updateClientData);
    }catch(error){
        return res.json(error);
    }
}

const deleteClient = async(req,res) => {
    const { _id } = req.params;
    clientData.deleteOne({ _id }).then(resp => {
        deletePurchase(_id);
        deleteProduct({ _id });
        return res.json(resp);
    }).catch(error => {
        return res.json(error);
    })

    

}

const loginUser = async(req,res) => {
    const { email, password } = req.params;

   clientData.findOne({ email, password }).then(resp => {
       return res.json(resp);
   }).catch(error => {
       return res.json(error);
   })
}


export { createClient, readClient, updateClient, deleteClient, loginUser };
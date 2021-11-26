import { productData } from '../model/model';


/*CLIENT ACTIONS*/
const createProduct = async(req,res) => {

    const { productName, productSlug, clientId, productPrice, productAvailability, avatarId } = req.body;

    try{
        const product = new productData({ productName, productSlug, clientId, productPrice, productAvailability,avatarId });
        const saveProduct = await product.save();
        return res.json(saveProduct);
    }catch(error){
        console.log(error);
    }
}

const readProduct = async(req,res) => {
    const { clientId } = req.body;
    try{
        const getProduct = await productData.find({clientId});
        return res.json(getProduct);
    }catch(error){
        console.log(error);
    }
}

const updateProduct = async(req,res) => {
    const { _id } = req.params;
    const { productName, productSlug, clientId, productPrice, productAvailability,avatarId } = req.body;

    try{
        const updateProductData = await productData.updateOne( { _id }, { productName, productSlug, clientId, productPrice, productAvailability,avatarId } );
        return res.json(updateProductData);
    }catch(error){
        return res.json(error);
    }
}

const deleteProduct = (req,res) => {
    const { _id } = req.params;
    productData.deleteOne({ _id }).then(resp => {
        return res.json(resp);
    }).catch(error => {
        return res.json(error);
    })
}


export { createProduct, readProduct, updateProduct, deleteProduct };
import { purchaseData, purshaseData } from '../model/model';

const createPurchase = (req,res) => {
    const { clientId, productId, purchaseQuantity } = req.body;

    const buyProduct = new purchaseData({ clientId, productId, purchaseQuantity });
    buyProduct.save().then(resp => {
        return res.json(resp);
    }).catch(error => {
        return res.json(error);
    })
}

const deletePurchase = (req,res) => {
    const { _id } = req.params;
    purchaseData.deleteOne({ clientId: _id }).then(data => {
        return res.json(data);
    }).catch(error => {
        return res.json(error);
    })
}

const readPurchase = (req,res) => {
    const { clientId } = req.params;
    purchaseData.findOne({ clientId}).then(data => {
        return res.json(data);
    }).catch(error => {
        return res.json(error);
    })
}


export { createPurchase, readPurchase, deletePurchase };
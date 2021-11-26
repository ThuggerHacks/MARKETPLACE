import express from 'express';
import * as user from '../service/user.service';
import * as product from '../service/product.service';
import * as purchase from '../service/purchase.service';

const router = express.Router();

router.get('/',user.readClient);
router.post('/client/create',user.createClient);
router.put('/client/update/:_id',user.updateClient);
router.delete('/client/delete/:_id',user.deleteClient);
router.get('/login/:email/:password',user.loginUser);

router.get('/product',product.readProduct);
router.post('/product/create',product.createProduct);
router.put('/product/update/:_id',product.updateProduct);
router.delete('/product/delete/:_id',product.deleteProduct);

router.post('/purchase/create',purchase.createPurchase);
router.get('/purchase/:clientId',purchase.readPurchase);
router.delete('/purchase/delete/:_id',purchase.deletePurchase);

export {router};
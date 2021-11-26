import mongoose from 'mongoose';

const { Schema, model } = mongoose;

/*PRODUCT MODEL*/
const product = new Schema({

    productName:{
        type:String,
        required:true
    },
    productSlug:{
        type:String,
        required:true
    },
    productDate:{
        type:String,
        default:Date.now
    },
    productPrice:{
        type:Number
    },
    productAvailability:{
        type:Boolean,
        default:false
    },
    clientId:{
        type:String,
        required:true
    },
    avatarId:{
        type:String
    }

});

/*CLIENT MODEL*/
const client = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

/*PURCHASE */
const purchase = new Schema({
    clientId:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    },
    purchaseData:{
        type:String,
        default:Date.now
    },
    purchaseQuantity:{
        type:Number,
        default:1
    }
});

const productData = model("product",product);
const clientData = model("client",client);
const purchaseData = model("purchase",purchase);

export { productData, clientData, purchaseData };
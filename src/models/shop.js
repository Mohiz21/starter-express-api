var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    userid:{
        type:String,
        required:true
    },
    shopname:{
        type:String,
        default:"",
        unique: true,
        required:true,
    },
    shopaddress:{
        type:String,
        default:"",
    },
    shoplicense:{
        type:String,
        required:true,
        default:""
    },
    contact: {
        type:String,
    },
    description: {
        type:String,
    },
    businessCategory: {
        type: String
    },
    businessType: {
        type: String,
        enum: ['company', 'property', 'newShop', 'oldShop', 'homeShop', 'gemsShop', 'services', 'transport', 'vehicles', 'farming', 'recycle'],
    },
    image: {
        type:String,
        default: ""
    },
    status:{
        type:Boolean,
    },
},{ timestamps: true })

module.exports = Shop = mongoose.model("shop", ShopSchema);

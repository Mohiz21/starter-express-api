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
        enum: ['jobs', 'property', 'newItem', 'oldItem', 'homeItem', 'gems', 'services', 'transport', 'vehicles'],
    },
    image: {
        type:String,
        default: ""
    },
    isFirstHand: {
        type: Boolean,
    },
    isSecondHand: {
        type: Boolean,
    },
    isHomeMade: {
        type: Boolean,
    },
    isGem: {
        type: Boolean,
    },
    status:{
        type:Boolean,
    },
},{ timestamps: true })

module.exports = Shop = mongoose.model("shop", ShopSchema);

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopItemSchema = new Schema({
    userid:{
        type:String,
        required:true
    },
    shopid:{
        type:String,
        required:true,
    },
    itemname:{
        type:String,
        default:"",
    },
    price:{
        type:Number,
    },
    country:{
        type:String,
        default:"",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    state:{
        type:String,
        default:"",
    },
    city:{
        type:String,
        default:"",
    },
    contact: {
        type:String,
    },
    email: {
        type:String,
    },
    duration: {
        type: Date
    },
    description: {
        type:String,
        default: ""
    },
    images: {
        type: Array
    },
    status:{
        type:Boolean,
    },
},{ timestamps: true })

module.exports = Shopitem = mongoose.model("shopitem", ShopItemSchema);

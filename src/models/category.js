var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    type:{
        type:String,
        default:"",
        enum: ['jobs', "businessCategory",  'property', 'farmingShop', 'farmingShopItem', 'scrap', 'recycledShop', 'recycledShopItem', 'newShop', 'newShopItem', 'oldShop', 'oldShopItem', 'homeShop', 'homeShopItem', 'gemsShop', 'gemsShopItem', 'services', 'transport', 'vehicles'],
    },
    name:{
        type:String,
        required:true,
        unique: true
    },
    parentCategory: {
        type:String,
        unique: true
    },
    status:{
        type:Boolean,
        default:true,
    },
},{ timestamps: true });

module.exports = Categories = mongoose.model("Categories", CategorySchema);
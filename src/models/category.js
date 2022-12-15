var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    type:{
        type:String,
        default:"",
        enum: ['jobs', 'property', 'newItem', 'oldItem', 'homeItem', 'gems', 'services', 'transport', 'vehicles'],
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
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicesSchema = new Schema({
    userid:{
        type:String,
        required:true
    },
    category:{
        type:String,
        default:"",
    },
    subcategory:{
        type:String,
        default:"",
    },
    email:{
        type:String,
        default:""
    },
    country:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    state:{
        type:String,
        default:""
    },
    contact: {
        type:String,
    },
    videos: {
        type:Array,
    },
    images: {
        type:Array,
    },
    services: {
        type:Array,
    },
    status:{
        type:Boolean,
    },
},{ timestamps: true })

module.exports = Service = mongoose.model("service", ServicesSchema);

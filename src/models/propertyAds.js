var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertyAdsSchema = new Schema({
    userid:{
        type:String,
    },
    companyid:{
        type:String,
    },
    plottype:{
        type:String,
        default:"",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    country: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    area:{
        type:String,
        default:"",
    },
    contactnumber: {
        type:String,
    },
    email: {
        type:String,
    },
    price: {
        type:String,
    },
    saletype: {
        type:String,
    },
    description: {
        type:String,
    },
    image: {
        type:String,
        default: ""
    },
    status:{
        type:Boolean,
    },
},{ timestamps: true })

module.exports = PropertyAds = mongoose.model("propertyAds", PropertyAdsSchema);

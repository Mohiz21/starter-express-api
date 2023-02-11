var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SellVehicleSchema = new Schema({
    userid:{
        type:String,
    },
    shopid:{
        type:String,
    },
    modelYear:{
        type:String,
        default:"",
    },
    model:{
        type:String,
        default:"",
    },
    make:{
        type:String,
        default:"",
    },
    version: {
        type:String,
        default:"",
    },
    registeredIn: {
        type: Date
    },
    color: {
        type:String,
        default:"",
    },
    assembly:{
        type:String,
        default:"",
    },
    country: {
        type:String,
        default:"",
    },
    state:{
        type:String,
        default:"",
    },
    city:{
        type:String,
        default:"",
    },
    cityArea: {
        type:String,
        default:"",
    },
    engineType:{
        type:String,
        default:"",
    },
    engineCapactiy:{
        type:String,
        default:"",
    },
    mileage: {
        type:String,
        default:"",
    },
    transmission:{
        type:String,
        default:"",
    },
    price: {
        type:String,
        default:"",
    },
    contact: {
        type:String,
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

module.exports = SellVehicle = mongoose.model("sellVehicle", SellVehicleSchema);

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransportVehicleSchema = new Schema({
    userid:{
        type:String,
    },
    shopid:{
        type:String,
    },
    brandName:{
        type:String,
        default:"",
    },
    model:{
        type:String,
        default:"",
    },
    noPlate:{
        type:String,
        default:"",
    },
    color: {
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

module.exports = TransportVehicle = mongoose.model("transportVechicle", TransportVehicleSchema);

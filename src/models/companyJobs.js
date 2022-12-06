var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
    companyId: {
        type: String,
        required:true,
    },
    title:{
        type:String,
        default:"",
        required:true,
    },
    companyname:{
        type:String,
        default:"",
    },
    email:{
        type:String,
        required:true,
        default:""
    },
    contactnumber: {
        type:String,
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
    duration: {
        type:String,
    },
    jobtype: {
        type:String,
        default: ""
    },
    siteremote: {
        type: String,
    },
    description: {
        type: String,
        default: ""
    },
    lastDateApply: {
        type: Date
    },
    status:{
        type:Boolean,
    },
},{ timestamps: true })

module.exports = Jobs = mongoose.model("jobs", JobsSchema);
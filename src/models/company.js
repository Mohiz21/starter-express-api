var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    userid:{
        type:String,
        required:true
    },
    companyname:{
        type:String,
        default:"",
        unique: true,
        required:true,
    },
    companyaddress:{
        type:String,
        default:"",
    },
    companylicense:{
        type:String,
        required:true,
        default:""
    },
    contactnumber: {
        type:String,
    },
    description: {
        type:String,
    },
    isBusinessProperty: {
        type: Boolean,
        default: false
    },
    isJobsCompany: {
        type: Boolean,
        default: false
    },
    image: {
        type:String,
        default: ""
    },
    status:{
        type:Boolean,
    },
},{ timestamps: true })

module.exports = Company = mongoose.model("company", CompanySchema);

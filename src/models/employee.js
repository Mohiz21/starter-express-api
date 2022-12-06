var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    userid:{
        type:String,
        required:true
    },
    jobtitle:{
        type:String,
        default:"",
        unique: true,
        required:true,
    },
    jobtype:{
        type:String,
        default:"",
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
    jobexperience: {
        type:String,
    },
    salarywant: {
        type:String,
    },
    contact: {
        type:String,
        default: ""
    },
    email: {
        type:String,
        default: ""
    },
    jobdescription: {
        type:String,
        default: ""
    },
    duration: {
        type: Date
    },
    status:{
        type:Boolean,
    },
},{ timestamps: true })

module.exports = Employee = mongoose.model("employee", EmployeeSchema);

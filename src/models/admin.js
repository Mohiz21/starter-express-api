var mongoose = require('mongoose');
const crypto = require("crypto");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    fullname:{
        type:String,
        default:"",
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        default:"123456"
    },
    accessToken:{
        type:String,
        default:""
    },
    refreshToken:{
        type:String,
        default:""
    },
    status:{
        type:Boolean,
        default:false
    },
},{ timestamps: true })

AdminSchema.methods.genrateHash = async function (password) {
    return new Promise((resolve, reject) => {
        crypto.scrypt(password, process.env.PASS_HASH_KEY, 64, (err, derivedKey) => {
            if (err) reject(err);
            return resolve(derivedKey.toString('hex'))
        });
    })
}

AdminSchema.methods.comparePassword = async function (password) {
    return new Promise((resolve, reject) => {
        crypto.scrypt(password, process.env.PASS_HASH_KEY, 64, (err, derivedKey) => {
            if (err) reject(err);
            return resolve(this.password == derivedKey.toString('hex'))
        });
    })
}

AdminSchema.methods.resetPasswordCompare = async function (password) {
    return new Promise((resolve, reject) => {
        crypto.scrypt(password, process.env.PASS_HASH_KEY, 64, (err, derivedKey) => {
            if (err) reject(err);
            return resolve(this.resetPassword.password == derivedKey.toString('hex'))
        });
    })
}

module.exports = Admins = mongoose.model("Admins", AdminSchema);
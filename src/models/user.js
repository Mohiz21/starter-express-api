var mongoose = require('mongoose');
const crypto = require("crypto");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    phonenumber: {
        type:String,
        default: ""
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
    dob: {
        type: Date,
    },
    gender: {
        type: String,
        default: ""
    },
    location: {
        type: {
          type: String, 
          enum: ['Point']
        },
        coordinates: {
          type: [Number]
        }
    },
    imageUrl:{
        type:String,
        default:"",
    },
    coverUrl: {
        type: String,
        default:"",
    },
    description: {
        type:Object
    },
    contactNumber: {
        type: Object
    },
    address: {
        type: Object
    },
    bio: {
        type: Object
    },
    education: {
        type: Array
    },
    lastLogin:{
        type:Date,
        default:Date.now()
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

UserSchema.methods.genrateHash = async function (password) {
    return new Promise((resolve, reject) => {
        crypto.scrypt(password, process.env.PASS_HASH_KEY, 64, (err, derivedKey) => {
            if (err) reject(err);
            return resolve(derivedKey.toString('hex'))
        });
    })
}

UserSchema.methods.comparePassword = async function (password) {
    return new Promise((resolve, reject) => {
        crypto.scrypt(password, process.env.PASS_HASH_KEY, 64, (err, derivedKey) => {
            if (err) reject(err);
            return resolve(this.password == derivedKey.toString('hex'))
        });
    })
}

UserSchema.methods.resetPasswordCompare = async function (password) {
    return new Promise((resolve, reject) => {
        crypto.scrypt(password, process.env.PASS_HASH_KEY, 64, (err, derivedKey) => {
            if (err) reject(err);
            return resolve(this.resetPassword.password == derivedKey.toString('hex'))
        });
    })
}

module.exports = Users = mongoose.model("users", UserSchema);
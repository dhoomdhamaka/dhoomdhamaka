const Joi = require('joi');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')


const vendorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 100
    },
    vendorType:{
        type : String,
        required : true,
        minlength : 3,
        maxlength : 100
    },
    city:{
        type : String,
        required : true,
        minlength : 3,
        maxlength : 30
    },
    area:{
        type : String,
        required : true,
        minlength : 2,
        maxlength : 100
    },
    phoneNo:{
        type : String,
        required : true,
        minlength : 5,
        maxlength : 100
    },
    email : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 200,
        unique : true
    },
    // imgName :{
    //     type : String,
    //     required : true,
    //     minlength : 3,
    //     maxlength : 200,
    //     unique : true
    // },
    // name : String,
    // email : String,
    // city : String,
    // vendorType: String,
    // imgName: String,
    // area: String,
    image : {
        data : Buffer,
        contentType : String
    }
},{
    timestamps:true
})

const Vendor = mongoose.model('Vendor', vendorSchema)

const validateVendor = (vendor) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(20).required(),
        city: Joi.string().min(3).max(20).required(),
        email: Joi.string().min(5).max(20).required().email(),
        vendorType: Joi.string().min(3).max(20).required(),
        area: Joi.string().min(2).max(200).required(),
        phoneNo: Joi.string().min(10).max(200).required(),
        year: Joi.string().min(1).max(1024).required(),
        // image: Joi.required()
      });
    
      return schema.validate(vendor);
}


exports.Vendor = Vendor
exports.validate = validateVendor
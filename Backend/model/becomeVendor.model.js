const Joi = require('joi');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')


const vendorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        maxlength : 100
    },
    vendorType:{
        type : String,
        required : true,
        maxlength : 100
    },
    city:{
        type : String,
        required : true,
        maxlength : 30
    },
    area:{
        type : String,
        required : true,
        maxlength : 100
    },
    phoneNo:{
        type : String,
        required : true,
        maxlength : 100
    },
    email : {
        type : String,
        required : true,
        maxlength : 200,
        unique : true
    },
    },{
    timestamps:true
})

const Vendor = mongoose.model('Vendor', vendorSchema)

const validateVendor = (vendor) => {
    const schema = Joi.object({
        name: Joi.string().max(150).required(),
        city: Joi.string().max(100).required(),
        email: Joi.string().max(150).required().email(),
        vendorType: Joi.string().max(150).required(),
        area: Joi.string().max(300).required(),
        phoneNo: Joi.string().max(20).required(),
        // year: Joi.string().max(1024).required(),
        // image: Joi.required()
      });
    
      return schema.validate(vendor);
}


exports.Vendor = Vendor
exports.validate = validateVendor
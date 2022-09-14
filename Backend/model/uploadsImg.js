const mongoose = require('mongoose')
const multer = require('multer')


const ImageSchema = new mongoose.Schema({
    name : String,
    image : {
        data : Buffer,
        contentType : String
    }
})

const ImageModel = mongoose.model('imageModel',ImageSchema)
module.exports= ImageModel
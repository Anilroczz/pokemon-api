"use strict";
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const path = require("node:path");
const uploadMongo = require("./mongoUpload");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadImage = function(imagePath,folderPath) {
    try {
        cloudinary.uploader.upload(imagePath,{
            resource_type: "image",
            public_id: path.basename(imagePath,path.extname(imagePath)),
            folder: folderPath,
            overwrite: true
        },(err,result) => {
            if(err) throw err;
            uploadMongo(result,collection);
            console.log(result);
        })
    } catch(err) {
        throw err;
    }
}

module.exports = uploadImage;
"use strict";

require("dotenv").config();
const B2 = require("backblaze-b2");
const path = require("node:path");
const fs = require("node:fs");
const uploadMongo = require("./mongoUpload");

const b2 = new B2({
  applicationKeyId: process.env.B2_APPLICATION_KEY_ID,
  applicationKey: process.env.B2_APPLICATION_KEY,
});

const uploadFile = async function (filename) {
  try {
    await b2.authorize();
    logger.log("info","application authorized to upload file to backblaze-b2 bucket...");

    let tokens = await b2.getUploadUrl({
      bucketId: process.env.B2_BUCKET_ID,
    });
    logger.log("info","uploadUrl and authorizationToken generated successfully...");

    const filePath = path.join(path.dirname(require.main.filename), filename);
    const fileContent = fs.readFileSync(filePath);
    const { uploadUrl, authorizationToken } = tokens.data;

    b2.uploadFile({
      uploadUrl: uploadUrl,
      uploadAuthToken: authorizationToken,
      fileName: path.basename(filename),
      data: fileContent,
      onUploadProgress: (e) => {logger.log("info",`file ${filename} uploading...`)},
    }).then((response) => {
      console.log(response.data);
      uploadMongo(response.data,"log-files");
      logger.log("info",
        `file ${filename} uploaded successfully to backblaze-b2 bucket ${tokens.data.bucketId}`,
      );
    }).catch((error) => {
      throw error;
    })

  } catch (err) {
    logger.log("error",`${err.stack}`);
  }
};

module.exports = uploadFile;

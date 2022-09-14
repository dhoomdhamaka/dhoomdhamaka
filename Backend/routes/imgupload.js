const express = require("express");
const router = express.Router();
const multer = require("multer");
const ImageModel = require("./../model/uploadsImg");

const Storage = multer.diskStorage({
  destination: "uploadsImg",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("testImg");

router.post("/", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
        console.log(req.files);
      console.log(err);
      res.status(400).send(err)
    }
    // console.log(req.body);    
    else{
        const newImage = ImageModel({
            name: req.body.name,
            image: {
              data: req.files.file,
              contentType: "image/png",
            },
          });
          newImage.save().then(() => res.send("uploaded successfully...!"));
    }
    
  });
});

module.exports = router;

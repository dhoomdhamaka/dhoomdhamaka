const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const { Vendor, validate } = require("../model/becomeVendor.model");

const app = express();

app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

router.post("/", (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    console.log(error);
    return res.status(400).send(error.details[0].message);
  }

  const newpath = __dirname + "/files/";
  const file = req.files.file;
  // console.log(file);
  // console.log(imgName);
  // console.log(req.body);
  file.mv(`${newpath}${file.name}`, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "File upload failed", code: 200 });
    } else {
      const { name, vendorType, city, area, phoneNo, email } = req.body;
      //   console.log(name);

      const newVendor = Vendor({
        name,
        vendorType,
        city,
        area,
        phoneNo,
        email,
        image: {
          data: file.name,
          contentType: "image/png",
        },
      });
      newVendor
        .save()
        .then(() => res.status(200).send("uploaded successfully...!"));
      //   res.status(200).send({ message: "File Uploaded", code: 200 });
    }
  });
});

module.exports = router;

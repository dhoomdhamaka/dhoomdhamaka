const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const { Vendor, validate } = require("../model/becomeVendor.model");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post("/", (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    console.log(error);
    return res.status(400).send(error.details[0].message);
  }

  
      const { name, vendorType, city, area, phoneNo, email } = req.body;

      const newVendor = Vendor({
        name,
        vendorType,
        city,
        area,
        phoneNo,
        email,
      });
      newVendor
        .save()
        .then(() => res.status(200).send("uploaded successfully...!"));
      //   res.status(200).send({ message: "File Uploaded", code: 200 });
  });

module.exports = router;

const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const auth = require("../middleware/auth");
const {Vendor} = require("../model/becomeVendor.model")
//routes



// router.get("/", async (req, res) => {
//     //    const users = await User.find()
//     //    console.log(users);
//     const users = await Vendor.aggregate([
//         { $project :{name :1,vendorType:1,email:1,city:1, area:1,phoneNo:1 } }
//       ])
//       res.status(200).send(users)
    
//     })

module.exports = router;

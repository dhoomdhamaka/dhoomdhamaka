const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const app = express();
const router = express.Router();
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const { User, validate } = require("../model/user");
const _ = require("lodash");
const auth = require("../middleware/auth");

// router.get("/me", auth, async (req, res) => {
//   const user = await User.findById(req.user._id).select("-password");
//   res.send(user);
// });

app.use(cookieParser());


router.post("/", async (req, res) => {
  console.log(req.body);


  const registerData = {
    username : req.body.data.username,
    email : req.body.data.email,
    phone : req.body.data.phone,
    password : req.body.data.password,
    points : 0,
    voucher :0
  }
  const username = req.body.data.username
  const email = req.body.data.email
  const phone =  req.body.data.phone
  const password = req.body.data.password
  const points = 0
  const voucher = 0
  const isadmin = "false"

  const { error } = validate(registerData);

  if (error) {
    console.log(error);
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ email: req.body.data.email });
  if (user) return res.status(400).send("User already registered...");

  // user = new User(_.pick(req.body.data, ["username", "email","phone", "password","points", "voucher"]));
  user = new User({username,email,phone,password,points,voucher, isadmin});

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

   res.status(200).send("USer Regisstered  SuccessFully...!")
});

module.exports = router;

//requirements

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../model/user");

//handling post req with token

router.post("/", async (req, res) => {
  const reqToken = req.body.token;
  const newPassword = req.body.data.password;
  console.log(newPassword);

  //checking token is in req

  if (!reqToken) {
    res.status(400).json({ error: "Token Not Provided...!" });
  }

  //finding the token and expire tok with same values

  User.findOne({ resetToken: reqToken, expireToken: { $gt: Date.now() } }).then(
    async (user) => {
      if (!user) {
        res.status(400).json({ error: "try again session expired" });
        console.log("session expired...");
      } else {
        //hashing new pass nd saving to db

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        user.expireToken = undefined;
        user.resetToken = undefined;
        user.save().then((savedUser) => {
          res.status(200).json("Password Updated successfully...!@#^&*$%");
        });
      }
    }
  );
});

module.exports = router;

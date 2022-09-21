//requirements

// const { crypto } = require("crypto");
const express = require("express");
const router = express.Router();
const crypto = require("node:crypto");
const nodemailer = require("nodemailer");
const { User } = require("../model/user");

//creatingbtransporting our mail nd pass nd service

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dhoomdhamaka0@gmail.com",
    pass: "udiaizjebznypvrp",
  },
});

//get request handling

router.post("/", (req, res) => {
  //creating random digits using crypto

  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }

    //storing it in token and converting to str from hex
    // console.log(req.body.email);
    const tokenReset = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(422)
          .json({ error: "user doesn't exists with that email" });
      }
      // if user avail means assign values
      user.resetToken = tokenReset;
      user.expireToken = Date.now() + 360000;

      // saving this items and sending mail using nodemailer

      user.save().then((result) => {
        var emailCnt = {
          from: "passwordResetDhoomDhamaka.com",
          to: req.body.email,
          subject: "Dhoom Dhamaka Password reset",
          text: "your are requested to password reset...!",
        };

        var emailCnt2 = {
          from: "passwordResetDhoomDhamaka.com",
          to: req.body.email,
          subject: "Password Reset Mail @Dhoom Dhamaka",
          text: "Hello. This email is for your email verification.",
          html: `<h3 style="text-align:center">Your are requested for password reset</h3>
         <b style="text-align:center">To reset password click below </b><br></br>
         <p style="text-align:center; margin-top:15px;"><a type="button" style="background-color:blue;color:white; border:none; padding: 15px 32px; text-align:center; text-decoration:none; display:inline-block; fontsize:16px;"
         href="https://dhoomdhamaka.com/newPassword/${tokenReset}">click here </a></p>
         `,
        };

        transporter.sendMail(emailCnt, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log("Message sent: %s", info.messageId);
          transporter.sendMail(emailCnt2, (error, info) => {
            if (error) {
              console.log(error + "2 err");
              res
                .status(400)
                .send("Something went wrong.please try again after sometime");
            } else {
              console.log("message sent");
              res
                .status(200)
                .send("Successfully reset mail sended.check your mail");
            }
          });
        });
      });
    });
  });
});

module.exports = router;

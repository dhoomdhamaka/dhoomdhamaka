// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// const {User} = require("../model/user")
// const {BirthdayForm} = require("../model/birthdaymodel")


// router.get("/", async (req, res) => {
// //    const users = await User.find()
// //    console.log(users);
// const formdata = await BirthdayForm.aggregate([
//     { $project :{userId:1} }
//   ])
// //   res.status(200).send(users)
// })
// console.log(formdata);
// // formdata.map((user)=>{
// //     const users = await User.aggregate([
// //         {$match :{_id:}}
// //     ])
// // })


// module.exports = router
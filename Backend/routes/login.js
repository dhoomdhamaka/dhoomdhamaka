const jwt = require('jsonwebtoken')
const config = require('config')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Joi = require('joi')
const _ = require('lodash')
const { User} = require('../model/user')
const logout = require('../controllers/user-controller')
const auth = require("../middleware/auth")
router.get("/", (req,res) => {
  const tok = req.cookies.Token
  console.log("myToken : " + tok);
})  

router.post("/", async (req, res) => {
    console.log(req.body.data);
    const {error} = validate(req.body.data)

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({email : req.body.data.email})
  if (!user) return res.status(400).send('Invalid email or password.')

   const validPassword = await bcrypt.compare(req.body.data.password, user.password)

   if(!validPassword) return res.status(400).send('Invalid email or password.')

  // const token = jwt.sign({ _id: user._id}, config.get('jwtPrivateKey'))

  const token = user.generateAuthToken();

  const foundUser = _.pick(user, ["_id", "username", "email"]);
  
  res
    // .cookie("Token", token, {expires: new Date(Date.now() + 10000), httpOnly: true })//86400000
    .cookie("bandhanUserToken", token, {maxAge:108000000 , httpOnly: true, sameSite:'none', secure: true })
    .status(200).json({ message: " Logged In SuccessFully", jsonToken : token})
     
});
//get login status

router.get("/getLoginStatus",auth,(req,res)=>{
  console.log("status call received");
  res.status(200).send("ok")
})
//for logout

router.get("/user", logout, (req,res)=>{
  console.log("req rec logout");
})


const validate = (req) => {
    const schema = Joi.object({
        email: Joi.string().min(5).max(200).required().email(),
        password: Joi.string().min(5).max(1024).required(),
      });
    
      return schema.validate(req);
}

module.exports = router;
// const config = require('config')
const jwt = require('jsonwebtoken')
// const dotenv = require('dotenv')
const { User } = require('../model/user')


const getUser = async (req, res, next) => {
    const userId = req.id;
    console.log(userId);
    let user;
  
    user = await User.findById(userId, "-password");
  
    if (!user) {
        console.log("!user");
      return res.status(404).json({ messsage: "User Not FOund" });
    } else {
        console.log("user");
      return res.status(200).json({ user });
    }
  
  };
  

module.exports = getUser;
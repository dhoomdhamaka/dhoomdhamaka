const jwt = require('jsonwebtoken')
const config = require('config')
const express = require('express')
const router = express.Router()
const { User} = require('../model/user')
// const {verifyToken , getUser} = require('../controllers/user-controller')
const auth = require('../middleware/auth')
const getUser = require('../middleware/getUser')
const app = express();

// setting user 

router.get("/"  , [ auth, getUser], (req,res) => {
    console.log("profile received");
})

module.exports = router;